import React, {FC} from 'react';
import {Image, TextStyle, TouchableOpacity, View} from 'react-native';
import Spacer from './Spacer';
import {Text} from 'react-native-svg';
import {ArrowDown} from '@assets/iconsSVG';
import {images} from '@assets/images';

interface IHeaderProfileProps {
  label?: string;
  subTitle?: string;
  profileUser?: boolean;
  style?: TextStyle;
}

export const HeaderProfile: FC<IHeaderProfileProps> = ({
  label,
  subTitle,
  style,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        elevation: 2,
      }}>
      <Spacer height={18} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={[{color: '#B7B7B7', fontSize: 12}, style]}>{label}</Text>
          <Spacer height={2} />
          <TouchableOpacity
            style={{
              //   backgroundColor: 'red',
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <Text
              style={[
                {color: '#DDDDDD', fontSize: 16, textAlign: 'center'},
                style,
              ]}>
              {subTitle}
            </Text>

            <Spacer width={4} />
            <View
              style={{
                justifyContent: 'center',
              }}>
              <ArrowDown color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
        </View>
        <Image source={images.user1} style={{width: 44, height: 44}} />
      </View>
    </View>
  );
};

export default HeaderProfile;
