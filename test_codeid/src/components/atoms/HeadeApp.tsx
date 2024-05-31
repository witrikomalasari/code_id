import {ArrowLeft} from '@assets/iconsSVG';
import {CodeIDText} from '@components/molecules';
import {ColorCodeID} from '@theme/colorCodeID';
import {type} from '@theme/fontCodeID';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface IHeaderAppProps {
  headerName?: string;
}

export const HeaderApp: FC<IHeaderAppProps> = ({headerName}) => {
  //   const navigation = useBaseNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
      // onPress={() => {
      //   navigation.popToTop();
      // }}
      // style={{backgroundColor: 'red'}}
      >
        <ArrowLeft color={ColorCodeID.text.black} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <CodeIDText
          textType="bold"
          fontSize={16}
          fontColors={ColorCodeID.text.white}
          style={{
            fontFamily: type.openSansSemiBold,
            letterSpacing: 2,
            textAlign: 'center',
            paddingRight: 32,
          }}>
          {headerName}
        </CodeIDText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ColorCodeID.primary,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default HeaderApp;
