import sprite from "./icons/minesweeper-sprites_9TPZzv3.png";
import styled from "styled-components";
import { GameStatus } from "../utils/game-types";
import { iconsOffsets } from "./icons/icons-offsets";

interface PlayerButtonProps {
  gameStatus: GameStatus;
  mouseDown: boolean;
}

export const PlayerButton = styled.button<PlayerButtonProps>`
  margin: 0;
  padding: 0;
  width: 26px;
  height: 26px;
  border: 0;
  box-sizing: border-box;
  background: url(${sprite});
  background-position: ${(p) => {
    if (p.mouseDown) {
      return iconsOffsets.PLAYER_SCARED;
    } else {
      switch (p.gameStatus) {
        case "gameOver":
          return iconsOffsets.PLAYER_GAME_OVER;
        case "victory":
          return iconsOffsets.PLAYER_VICTORY;
        default:
          return iconsOffsets.PLAYER_BASE;
      }
    }
  }};
  :active {
    background-position: ${iconsOffsets.PLAYER_PRESSED};
  }
`;
