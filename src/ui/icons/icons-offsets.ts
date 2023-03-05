export enum IconsOffsets {
  CELL_ROW_1 = -51,
  CELL_ROW_2 = -68,
  CELL_WIDTH = -17,
  PLAYER_ROW = -24,
  PLAYER_WIDTH = -27,
  DIGIT_ROW = 0,
  DIGIT_WIDTH = -14,
}

export const iconsOffsets = {
  DIGIT_1: `${IconsOffsets.DIGIT_WIDTH * 0}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_2: `${IconsOffsets.DIGIT_WIDTH * 1}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_3: `${IconsOffsets.DIGIT_WIDTH * 2}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_4: `${IconsOffsets.DIGIT_WIDTH * 3}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_5: `${IconsOffsets.DIGIT_WIDTH * 4}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_6: `${IconsOffsets.DIGIT_WIDTH * 5}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_7: `${IconsOffsets.DIGIT_WIDTH * 6}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_8: `${IconsOffsets.DIGIT_WIDTH * 7}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_9: `${IconsOffsets.DIGIT_WIDTH * 8}px ${IconsOffsets.DIGIT_ROW}px`,
  DIGIT_0: `${IconsOffsets.DIGIT_WIDTH * 9}px ${IconsOffsets.DIGIT_ROW}px`,
  PLAYER_BASE: `${IconsOffsets.PLAYER_WIDTH * 0}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_PRESSED: `${IconsOffsets.PLAYER_WIDTH * 1}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_SCARED: `${IconsOffsets.PLAYER_WIDTH * 2}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_VICTORY: `${IconsOffsets.PLAYER_WIDTH * 3}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  PLAYER_GAME_OVER: `${IconsOffsets.PLAYER_WIDTH * 4}px ${
    IconsOffsets.PLAYER_ROW
  }px`,
  FIELD_BASE: `${IconsOffsets.CELL_WIDTH * 0}px ${IconsOffsets.CELL_ROW_1}px`,
  FIELD_EMPTY: `${IconsOffsets.CELL_WIDTH * 1}px ${IconsOffsets.CELL_ROW_1}px`,
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
