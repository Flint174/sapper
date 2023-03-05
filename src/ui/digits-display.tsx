import { FC } from "react";
import styled from "styled-components";
import { iconsOffsets } from "./icons/icons-offsets";
import sprite from "./icons/minesweeper-sprites_9TPZzv3.png";

const Display = styled.div`
  display: flex;
  flex-direction: row;
`;

interface DigitProps {
  value: number;
}

const Digit = styled.div<DigitProps>`
  margin: 0;
  padding: 0;
  width: 13px;
  height: 23px;
  background-image: url(${sprite});
  background-position: ${(p) => {
    switch (p.value) {
      case 0:
        return iconsOffsets.DIGIT_0;
      case 1:
        return iconsOffsets.DIGIT_1;
      case 2:
        return iconsOffsets.DIGIT_2;
      case 3:
        return iconsOffsets.DIGIT_3;
      case 4:
        return iconsOffsets.DIGIT_4;
      case 5:
        return iconsOffsets.DIGIT_5;
      case 6:
        return iconsOffsets.DIGIT_6;
      case 7:
        return iconsOffsets.DIGIT_7;
      case 8:
        return iconsOffsets.DIGIT_8;
      case 9:
        return iconsOffsets.DIGIT_9;
      default:
        return iconsOffsets.DIGIT_0;
    }
  }};
`;

interface DigitsDisplayProps {
  value: number;
}

export const DigitsDisplay: FC<DigitsDisplayProps> = ({ value }) => {
  const min = Math.min(999, value);
  const [units, tens, hundreds] = [
    min % 10,
    Math.floor((min % 100) / 10),
    Math.floor(min / 100),
  ];

  return (
    <Display>
      <Digit value={hundreds} />
      <Digit value={tens} />
      <Digit value={units} />
    </Display>
  );
};
