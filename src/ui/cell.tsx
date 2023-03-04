import sprite from "./icons/minesweeper-sprites_9TPZzv3.png";
import styled from "styled-components";
import { FieldCell } from "../utils/cell-types";

type CellProps = FieldCell;

enum IconsOffsets {
  CELL_ROW_1 = -51,
  CELL_ROW_2 = -68,
  CELL_WIDTH = -17,
}

const iconsOffsets = {
  FIELD_BASE: `0 ${IconsOffsets.CELL_ROW_1}px`,
  FIELD_EMPTY: `${IconsOffsets.CELL_WIDTH}px ${IconsOffsets.CELL_ROW_1}px`,
  FIELD_FLAG: `${IconsOffsets.CELL_WIDTH * 2}px ${IconsOffsets.CELL_ROW_1}px`,
  FIELD_QUESTION: `${IconsOffsets.CELL_WIDTH * 3}px ${
    IconsOffsets.CELL_ROW_1
  }px`,
  FIELD_QUESTION_REVEALED: `${IconsOffsets.CELL_WIDTH * 4}px ${
    IconsOffsets.CELL_ROW_1
  }px`,
  FIELD_MINE_REVEALED: `${IconsOffsets.CELL_WIDTH * 5}px ${
    IconsOffsets.CELL_ROW_1
  }px`,
  FIELD_MINE_DETONATED: `${IconsOffsets.CELL_WIDTH * 6}px ${
    IconsOffsets.CELL_ROW_1
  }px`,
  FIELD_MINE_ERROR: `${IconsOffsets.CELL_WIDTH * 7}px ${
    IconsOffsets.CELL_ROW_1
  }px`,
  FIELD_NUM_1: `0 ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_2: `${IconsOffsets.CELL_WIDTH}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_3: `${IconsOffsets.CELL_WIDTH * 2}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_4: `${IconsOffsets.CELL_WIDTH * 3}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_5: `${IconsOffsets.CELL_WIDTH * 4}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_6: `${IconsOffsets.CELL_WIDTH * 5}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_7: `${IconsOffsets.CELL_WIDTH * 6}px ${IconsOffsets.CELL_ROW_2}px`,
  FIELD_NUM_8: `${IconsOffsets.CELL_WIDTH * 7}px ${IconsOffsets.CELL_ROW_2}px`,
};

export const Cell = styled.div<CellProps>`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  background: url(${sprite});
  background-position: ${(p) => {
    switch (p.show) {
      case "hide":
        switch (p.block) {
          case "none":
            return iconsOffsets.FIELD_BASE;
          case "flag":
            return iconsOffsets.FIELD_FLAG;
          case "?":
            return iconsOffsets.FIELD_QUESTION;

          default:
            return iconsOffsets.FIELD_BASE;
        }
      case "show":
        switch (p.type) {
          case "empty":
            return iconsOffsets.FIELD_EMPTY;
          case "mine":
            return iconsOffsets.FIELD_MINE_DETONATED;
          case "number":
            switch (p.value) {
              case 1:
                return iconsOffsets.FIELD_NUM_1;
              case 2:
                return iconsOffsets.FIELD_NUM_2;
              case 3:
                return iconsOffsets.FIELD_NUM_3;
              case 4:
                return iconsOffsets.FIELD_NUM_4;
              case 5:
                return iconsOffsets.FIELD_NUM_5;
              case 6:
                return iconsOffsets.FIELD_NUM_6;
              case 7:
                return iconsOffsets.FIELD_NUM_7;
              case 8:
                return iconsOffsets.FIELD_NUM_8;

              default:
                return iconsOffsets.FIELD_NUM_1;
            }
          default:
            return iconsOffsets.FIELD_EMPTY;
        }
      case "reveal":
        switch (p.type) {
          case "mine":
            switch (p.block) {
              case "?":
                return iconsOffsets.FIELD_QUESTION;
              case "flag":
                return iconsOffsets.FIELD_FLAG;
              case "none":
                return iconsOffsets.FIELD_MINE_REVEALED;
              default:
                return iconsOffsets.FIELD_MINE_REVEALED;
            }

          default:
            return iconsOffsets.FIELD_QUESTION_REVEALED;
        }

      default:
        break;
    }
  }};
  :hover {
    background-color: grey;
  }
`;