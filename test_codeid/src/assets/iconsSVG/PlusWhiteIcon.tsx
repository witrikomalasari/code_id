import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const PlusWhiteIcon = ({width = 28, height = 28}: IconsProps) => {
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
            fill="white"
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
            stroke="#2F2D2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14 18V10"
            stroke="#2F2D2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default PlusWhiteIcon;
