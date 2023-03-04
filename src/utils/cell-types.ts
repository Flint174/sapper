export interface MineCell {
  type: "mine";
}

export interface EmptyCell {
  type: "empty";
}

export interface NumberCell {
  type: "number";
  value: number;
}

export type CellType = MineCell | EmptyCell | NumberCell;
export type BlockType = "none" | "?" | "flag";

export interface CellMeta {
  index: number;
  show: "hide" | "show" | "reveal";
  block: BlockType;
}

export type FieldCell = CellType & CellMeta;
