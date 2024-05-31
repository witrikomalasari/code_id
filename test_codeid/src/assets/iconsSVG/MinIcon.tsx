import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const MinIcon = ({width = 28, height = 28, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={28 / 28}
      children={
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <Rect
            x="0.5"
            y="0.500031"
            width="27"
            height="27"
            rx="13.5"
            fill={color} //"white"
          />
          <Rect
            x="0.5"
            y="0.500031"
            width="27"
            height="27"
            rx="13.5"
            stroke="#EAEAEA"
          />
          <Path
            d="M10 14H18"
            stroke="#AAADB0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default MinIcon;
