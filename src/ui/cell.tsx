import sprite from "./icons/minesweeper-sprites_9TPZzv3.png";
import styled from "styled-components";
import { FieldCell } from "../utils/cell-types";
import { iconsOffsets } from "./icons/icons-offsets";

// type CellProps = FieldCell & { mouseDown: boolean };
type CellProps = FieldCell;

export const Cell = styled.div<CellProps>`
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  user-select: none;
  background: url(${sprite});
  background-position: ${(p) => {
    switch (p.show) {
      case "hide":
        switch (p.block) {
          case "none":
            return p.prefire
              ? iconsOffsets.FIELD_EMPTY
              : iconsOffsets.FIELD_BASE;
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
            return iconsOffsets.FIELD_MINE_ERROR;
        }

      default:
        break;
    }
  }};
`;

/* :hover {
    background-position: ${(p) =>
      p.show === "hide" && p.mouseDown ? iconsOffsets.FIELD_EMPTY : undefined};
  } */
