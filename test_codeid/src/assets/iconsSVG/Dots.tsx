import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const Dots = ({width = 24, height = 24, color}: IconsProps) => {
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
            d="M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45395 20.5886 7.01215 18.7882 5.2118C16.9879 3.41145 14.5461 2.40002 12 2.40002C9.45395 2.40002 7.01215 3.41145 5.2118 5.2118C3.41145 7.01215 2.40002 9.45395 2.40002 12C2.40002 14.5461 3.41145 16.9879 5.2118 18.7882C7.01215 20.5886 9.45395 21.6 12 21.6ZM8.40002 10.8H6.00002V13.2H8.40002V10.8ZM18 10.8H15.6V13.2H18V10.8ZM10.8 10.8H13.2V13.2H10.8V10.8Z"
            fill={color} //"#808080"
          />
        </Svg>
      }
    />
  );
};

export default Dots;
