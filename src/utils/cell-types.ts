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

export type CellTypes = MineCell | EmptyCell | NumberCell;

export interface CellMeta {
  index: number;
  show: "hide" | "show" | "reveal";
  block: "none" | "?" | "flag";
}

export type FieldCell = CellTypes & CellMeta;
