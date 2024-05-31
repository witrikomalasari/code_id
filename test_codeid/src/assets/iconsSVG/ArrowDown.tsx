import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const ArrowDown = ({width = 14, height = 14, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={14 / 14}
      children={
        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <Path
            d="M11.0833 4.95833L6.99999 9.04167L2.91666 4.95833"
            stroke={color} //"white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default ArrowDown;
