import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const Note = ({width = 14, height = 14}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={14 / 15}
      children={
        <Svg width="14" height="15" viewBox="0 0 14 15" fill="none">
          <Path
            d="M9.16784 9.96365H4.95618"
            stroke="#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.16784 7.52152H4.95618"
            stroke="#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M6.56326 5.08506H4.95618"
            stroke="#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.28003 2.10405C9.28003 2.10405 4.80178 2.10638 4.79478 2.10638C3.18478 2.1163 2.18787 3.17563 2.18787 4.79147V10.1558C2.18787 11.7798 3.19237 12.8432 4.81637 12.8432C4.81637 12.8432 9.29403 12.8415 9.30162 12.8415C10.9116 12.8316 11.9091 11.7716 11.9091 10.1558V4.79147C11.9091 3.16747 10.904 2.10405 9.28003 2.10405Z"
            stroke="#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default Note;
