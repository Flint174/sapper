import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks/use-store";
import { startGame } from "./services/actions/game-actions";
import {
  blockCell,
  blockCells,
  newField,
  revealMines,
  showCell,
} from "./services/slices/field-cells-slice";
import { gameOver, newPlayer, victory } from "./services/slices/player-slice";
import { Cell } from "./ui";
import { PlayerButton } from "./ui/player-button";
import { FieldCell } from "./utils/cell-types";
import { FieldDimentions, FIELD_SIZE, MINES_AMOUNT } from "./utils/game-config";

const colors = {
  bgGrey: "#C0C0C0",
  shadow: { light: "FFFFFF", dark: "#808080" },
};

const Container = styled.div`
  background-color: ${colors.bgGrey};
  padding: 5px;
`;

const GameField = styled.div`
  display: grid;
  grid-template-columns: repeat(${FieldDimentions.WIDTH}, 1fr);
  grid-template-rows: repeat(${FieldDimentions.HEIGHT}, 1fr);
`;

const ToolBar = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const {
    fieldCells: cells,
    player: { time, status },
  } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  const cellClickHandler = useCallback(
    (cell: FieldCell) => {
      if (status === "gameOver") return;

      if (status === "newGame") {
        dispatch(startGame(cell));
      }

      dispatch(showCell(cell));

      if (cell.type === "mine" && cell.block === "none") {
        dispatch(revealMines());
        dispatch(gameOver());
      }
    },
    [status, dispatch]
  );

  const cellRClickHandler = useCallback(
    (cell: FieldCell) => {
      if (status === "gameOver") return;
      dispatch(
        blockCell({
          cell,
          value:
            cell.block === "none"
              ? "flag"
              : cell.block === "flag"
              ? "?"
              : "none",
        })
      );
    },
    [dispatch, status]
  );

  const newGameHandler = () => {
    dispatch(newField());
    dispatch(newPlayer());
  };

  const fieldCells = useMemo(
    () =>
      cells.map((cell, index) => (
        <Cell
          key={index}
          {...cell}
          mouseDown={mouseDown}
          onMouseUp={() => cellClickHandler(cell)}
          onContextMenu={(e) => {
            e.preventDefault();
            cellRClickHandler(cell);
          }}
        ></Cell>
      )),
    [cells, cellClickHandler, cellRClickHandler, mouseDown]
  );

  useEffect(() => {
    if (status !== "inProgress") return;
    if (
      cells.filter((cell) => cell.show === "show").length ===
      FIELD_SIZE - MINES_AMOUNT
    ) {
      dispatch(victory());
      dispatch(
        blockCells({
          cells: cells.filter((cell) => cell.show === "hide"),
          value: "flag",
        })
      );
    }
  }, [cells, dispatch, status]);

  useEffect(() => {
    const mouseDownHandler = () => {
      if (status === "inProgress" || status === "newGame") {
        setMouseDown(true);
      }
    };
    const mouseUpHanlder = () => {
      setMouseDown(false);
    };

    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHanlder);
    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHanlder);
    };
  }, [status]);

  return (
    <Container>
      <ToolBar>
        <div>{time}</div>
        <PlayerButton
          onClick={newGameHandler}
          gameStatus={status}
          mouseDown={mouseDown}
        />
        <div>mines</div>
      </ToolBar>
      <GameField>{fieldCells}</GameField>
    </Container>
  );
}

export default App;
