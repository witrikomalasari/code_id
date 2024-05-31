import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const ProfileIcon = ({width = 28, height = 28, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={28 / 28}
      children={
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <Path
            d="M19.3337 8.16671C19.3337 11.1122 16.9458 13.5 14.0003 13.5C11.0548 13.5 8.66699 11.1122 8.66699 8.16671C8.66699 5.22119 11.0548 2.83337 14.0003 2.83337C16.9458 2.83337 19.3337 5.22119 19.3337 8.16671Z"
            fill={color} //"#FCC434"
            stroke={color} //"#FCC434"
          />
          <Path
            d="M13.9995 16.9166C8.15453 16.9166 3.39453 20.8366 3.39453 25.6666C3.39453 25.9933 3.6512 26.25 3.97786 26.25H24.0212C24.3479 26.25 24.6045 25.9933 24.6045 25.6666C24.6045 20.8366 19.8445 16.9166 13.9995 16.9166Z"
            fill={color} //"#FCC434"
          />
        </Svg>
      }
    />
  );
};

export default ProfileIcon;
