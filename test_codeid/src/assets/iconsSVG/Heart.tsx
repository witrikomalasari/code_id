import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const Heart = ({width = 24, height = 24, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <G id="Iconly/Light/Heart">
            <G id="Heart">
              <Path
                id="Stroke 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
                stroke={color} //"#2F2D2C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                id="Stroke 3"
                d="M16 6.7C17.07 7.046 17.826 8.001 17.917 9.122"
                stroke={color} //"#2F2D2C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </G>
          </G>
        </Svg>
      }
    />
  );
};

export default Heart;
