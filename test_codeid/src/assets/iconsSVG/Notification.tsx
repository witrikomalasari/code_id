import {SVGWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

export const Notification = ({width = 24, height = 24, color}: IconsProps) => {
  return (
    <SVGWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
            fill={color} //"#8D8D8D"
          />
          <Path
            opacity="0.4"
            d="M14.0087 19.2284C13.5088 19.1216 10.4626 19.1216 9.96269 19.2284C9.53533 19.3271 9.07318 19.5567 9.07318 20.0603C9.09803 20.5407 9.37929 20.9647 9.76888 21.2336L9.76789 21.2346C10.2718 21.6274 10.8631 21.8771 11.4823 21.9668C11.8123 22.0121 12.1482 22.0101 12.4901 21.9668C13.1083 21.8771 13.6996 21.6274 14.2035 21.2346L14.2025 21.2336C14.5921 20.9647 14.8734 20.5407 14.8982 20.0603C14.8982 19.5567 14.4361 19.3271 14.0087 19.2284Z"
            fill={color} //"#8D8D8D"
          />
        </Svg>
      }
    />
  );
};

export default Notification;
