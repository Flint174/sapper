import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks/use-store";
import { startGame } from "./services/actions/game-actions";
import {
  blockCell,
  blockCells,
  generateField,
  newField,
  revealMines,
  showCell,
} from "./services/slices/field-cells-slice";
import { gameOver, newPlayer, victory } from "./services/slices/player-slice";
import { Cell } from "./ui";
import { FieldCell } from "./utils/cell-types";
import { FieldDimentions, FIELD_SIZE, MINES_AMOUNT } from "./utils/game-config";

const GameField = styled.div`
  display: grid;
  grid-template-columns: repeat(${FieldDimentions.WIDTH}, 1fr);
  grid-template-rows: repeat(${FieldDimentions.HEIGHT}, 1fr);
`;

const NewGameButton = styled.button``;

function App() {
  const {
    fieldCells: cells,
    player: { time, status },
  } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  const cellClickHandler = (cell: FieldCell) => {
    if (status === "gameOver") return;

    if (status === "newGame") {
      dispatch(startGame(cell));
    }

    dispatch(showCell(cell));

    if (cell.type === "mine" && cell.block === "none") {
      dispatch(revealMines());
      dispatch(gameOver());
    }
  };

  const cellRClickHandler = (cell: FieldCell) => {
    if (status === "gameOver") return;
    dispatch(
      blockCell({
        cell,
        value:
          cell.block === "none" ? "flag" : cell.block === "flag" ? "?" : "none",
      })
    );
  };

  const newGameHandler = () => {
    dispatch(newField());
    dispatch(newPlayer());
  };

  const fieldCells = cells.map((cell, index) => (
    <Cell
      key={index}
      {...cell}
      onClick={() => cellClickHandler(cell)}
      onContextMenu={(e) => {
        e.preventDefault();
        cellRClickHandler(cell);
      }}
    ></Cell>
  ));

  useEffect(() => {
    if (status !== "inProgress") return;
    if (
      cells.filter((cell) => cell.show === "show").length ===
      FIELD_SIZE - MINES_AMOUNT
    ) {
      dispatch(victory());
      //   console.log(cells.filter((cell) => cell.show === "hide"));
      dispatch(
        blockCells({
          cells: cells.filter((cell) => cell.show === "hide"),
          value: "flag",
        })
      );
      // .forEach((cell) => dispatch(blockCell({ cell, value: "flag" })));
    }
  }, [cells, dispatch, status]);

  return (
    <div>
      <NewGameButton onClick={newGameHandler}>New Game</NewGameButton>
      <div>{time}</div>
      <GameField>{fieldCells}</GameField>
    </div>
  );
}

export default App;
