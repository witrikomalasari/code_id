import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {IconsProps} from './typeInterface';
import {Path, Svg} from 'react-native-svg';

export const NoteBlue = ({width = 24, height = 24}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
            stroke="#091C3F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.73334 12H16.2667"
            stroke="#4157FF"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.73334 8.26666H16.2667"
            stroke="#4157FF"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8 16H13"
            stroke="#4157FF"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default NoteBlue;
