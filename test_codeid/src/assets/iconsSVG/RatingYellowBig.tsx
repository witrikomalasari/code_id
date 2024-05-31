import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const RatingYellowBig = ({
  width = 20,
  height = 20,
  color,
}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={20 / 20}
      children={
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65834 14.0917 6.73334L16.75 7.17501C18.45 7.45834 18.85 8.69168 17.625 9.90834L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63332 16.05 9.17499 16.3167L6.68332 17.7917C4.89999 18.85 3.81665 18.0583 4.28332 16.0417L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90834C1.15832 8.69168 1.54999 7.45834 3.24999 7.17501L5.90832 6.73334C6.34999 6.65834 6.88332 6.26668 7.08332 5.85835L8.54999 2.92501C9.34999 1.33335 10.65 1.33335 11.4417 2.92501Z"
            fill={color} //"#FBBE21"
          />
        </Svg>
      }
    />
  );
};

export default RatingYellowBig;
