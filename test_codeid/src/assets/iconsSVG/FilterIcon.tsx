import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const FilterIcon = ({width = 44, height = 44, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={44 / 44}
      children={
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <Rect
            width="44"
            height="44"
            rx="12"
            fill={color} //"#C67C4E"
          />
          <Path
            d="M30.3333 17.4167H25.3333"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M17 17.4167H13.6667"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M20.3334 20.3333C21.9442 20.3333 23.25 19.0275 23.25 17.4167C23.25 15.8058 21.9442 14.5 20.3334 14.5C18.7225 14.5 17.4167 15.8058 17.4167 17.4167C17.4167 19.0275 18.7225 20.3333 20.3334 20.3333Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M30.3333 26.5833H27"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M18.6667 26.5833H13.6667"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M23.6667 29.5C25.2775 29.5 26.5833 28.1942 26.5833 26.5833C26.5833 24.9725 25.2775 23.6667 23.6667 23.6667C22.0558 23.6667 20.75 24.9725 20.75 26.5833C20.75 28.1942 22.0558 29.5 23.6667 29.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default FilterIcon;
