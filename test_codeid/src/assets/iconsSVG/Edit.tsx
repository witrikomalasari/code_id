import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const Edit = ({width = 14, height = 14, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={14 / 15}
      children={
        <Svg width="14" height="15" viewBox="0 0 14 15" fill="none">
          <Path
            d="M6.70387 2.12692H4.52279C2.72904 2.12692 1.60437 3.39684 1.60437 5.19467V10.0445C1.60437 11.8423 2.72379 13.1123 4.52279 13.1123H9.67012C11.4697 13.1123 12.5891 11.8423 12.5891 10.0445V7.69484"
            stroke={color} //"#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.14962 6.87053L9.50886 2.51128C10.0519 1.96878 10.9322 1.96878 11.4753 2.51128L12.1852 3.22119C12.7283 3.76428 12.7283 4.64511 12.1852 5.18761L7.80495 9.56786C7.56753 9.80528 7.24553 9.93886 6.90953 9.93886H4.72437L4.7792 7.73386C4.78737 7.40953 4.91978 7.10036 5.14962 6.87053Z"
            stroke={color} //"#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.84644 3.1848L11.5099 5.8483"
            stroke="#303336"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default Edit;
