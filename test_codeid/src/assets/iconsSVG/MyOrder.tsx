import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const MyOrder = ({width = 24, height = 24}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M14.5344 4V8.26667H18.801"
            stroke="#091C3F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5333 4H6V20H18.8V8.26667L14.5333 4V4Z"
            stroke="#091C3F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.20001 16.2667H15.6"
            stroke="#091C3F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.20001 13.6H15.6"
            stroke="#4157FF"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.20001 10.9333H15.6"
            stroke="#4157FF"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.20001 8.26669H11.3333"
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

export default MyOrder;
