import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const ArrowRight = ({width = 20, height = 20, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={20 / 20}
      children={
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M7.08337 4.16668L12.9167 10L7.08337 15.8333"
            stroke={color} //"#2F2D2C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default ArrowRight;
