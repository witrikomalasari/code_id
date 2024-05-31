import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {IconsProps} from './typeInterface';
import {Path, Svg} from 'react-native-svg';

export const FurniturIcon = ({width = 10, height = 10, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={10 / 11}
      children={
        <Svg width="10" height="11" viewBox="0 0 10 11" fill="none">
          <Path
            d="M5.72083 1.96251L6.45416 3.42917C6.55416 3.63334 6.82083 3.82917 7.04583 3.86667L8.37499 4.08751C9.22499 4.22917 9.42499 4.84584 8.81249 5.45417L7.77916 6.48751C7.60416 6.66251 7.50833 7.00001 7.56249 7.24167L7.85833 8.52084C8.09166 9.53334 7.55416 9.92501 6.65833 9.39584L5.41249 8.65834C5.18749 8.52501 4.81666 8.52501 4.58749 8.65834L3.34166 9.39584C2.44999 9.92501 1.90833 9.52917 2.14166 8.52084L2.43749 7.24167C2.49166 7.00001 2.39583 6.66251 2.22083 6.48751L1.18749 5.45417C0.579159 4.84584 0.774993 4.22917 1.62499 4.08751L2.95416 3.86667C3.17499 3.82917 3.44166 3.63334 3.54166 3.42917L4.27499 1.96251C4.67499 1.16667 5.32499 1.16667 5.72083 1.96251Z"
            fill={color} //"#FBBE21"
          />
        </Svg>
      }
    />
  );
};

export default FurniturIcon;
