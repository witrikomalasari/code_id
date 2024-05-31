import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {IconsProps} from './typeInterface';
import {G, Path, Svg} from 'react-native-svg';

export const PencilIcon = ({width = 17, height = 17, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={15 / 18}
      children={
        <Svg width="15" height="18" viewBox="0 0 15 18" fill="none">
          <G opacity="0.45">
            <Path
              d="M1 16.4667H12.7333"
              stroke={color} //"#090F47"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M9 2.60001L12.2 5.80001"
              stroke={color} //"#090F47"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.2 13.8H1V10.6L10.6 1L13.8 4.2L4.2 13.8V13.8Z"
              stroke={color} //"#090F47"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </G>
        </Svg>
      }
    />
  );
};

export default PencilIcon;
