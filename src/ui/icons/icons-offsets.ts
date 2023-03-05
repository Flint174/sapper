export enum IconsOffsets {
  CELL_ROW_1 = -51,
  CELL_ROW_2 = -68,
  CELL_WIDTH = -17,
  PLAYER_ROW = -24,
  PLAYER_WIDTH = -27,
}

export const iconsOffsets = {
  PLAYER_BASE: `0 ${IconsOffsets.PLAYER_ROW}px`,
  PLAYER_PRESSED: `${IconsOffsets.PLAYER_WIDTH}px ${IconsOffsets.PLAYER_ROW}px`,
  PLAYER_SCARED: `${IconsOffsets.PLAYER_WIDTH * 2}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_VICTORY: `${IconsOffsets.PLAYER_WIDTH * 3}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_GAME_OVER: `${IconsOffsets.PLAYER_WIDTH * 4}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
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
