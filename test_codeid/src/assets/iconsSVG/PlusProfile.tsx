import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const PlusProfile = ({width = 14, height = 14, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={14 / 14}
      children={
        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <Path
            d="M7 1V13"
            stroke={color} //"#4157FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1 7H13"
            stroke={color} //"#4157FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default PlusProfile;
