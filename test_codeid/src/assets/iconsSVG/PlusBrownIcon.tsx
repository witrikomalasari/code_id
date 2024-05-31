import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const PlusBrownIcon = ({width = 32, height = 32, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={32 / 32}
      children={
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <Rect
            width="32"
            height="32"
            rx="10"
            fill={color} //"#C67C4E"
          />
          <Path
            d="M12 16H20"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16 20V12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default PlusBrownIcon;
