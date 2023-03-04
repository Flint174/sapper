import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks/use-store";
import {
  blockCell,
  generateField,
  newGame,
  revealMines,
  showCell,
} from "./services/slices/field-cells-slice";
import { Cell } from "./ui";
import { FieldCell } from "./utils/cell-types";
import { FieldDimentions } from "./utils/game-config";

const GameField = styled.div`
  display: grid;
  grid-template-columns: repeat(${FieldDimentions.WIDTH}, 1fr);
  grid-template-rows: repeat(${FieldDimentions.HEIGHT}, 1fr);
`;

const NewGameButton = styled.button``;

function App() {
  const cells = useAppSelector((store) => store.fieldCells);
  const dispatch = useAppDispatch();

  const cellClickHandler = (cell: FieldCell) => {
    //   dispatch(generateMines());
    dispatch(showCell(cell));
    if (cell.type === "mine" && cell.show === "hide") {
      dispatch(revealMines());
    }
  };

  const cellRClickHandler = (cell: FieldCell) => {
    dispatch(blockCell(cell));
  };
  const newGameHandler = () => {
    dispatch(newGame());
    dispatch(generateField(cells[1]));
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

  return (
    <div>
      <NewGameButton onClick={newGameHandler}>New Game</NewGameButton>
      <GameField>{fieldCells}</GameField>
    </div>
  );
}

export default App;