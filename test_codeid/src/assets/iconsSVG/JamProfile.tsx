import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const JamProfile = ({width = 24, height = 24, color}: IconsProps) => {
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
            d="M12 4C16.4181 4 20 7.58187 20 12C20 16.4181 16.4181 20 12 20C7.58187 20 4 16.4181 4 12C4 7.58187 7.58187 4 12 4V4Z"
            stroke={color} //"#091C3F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12 8.26666V12H15.7333"
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

export default JamProfile;
