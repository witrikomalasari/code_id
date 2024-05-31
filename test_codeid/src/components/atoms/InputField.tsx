import {ColorCodeID} from '@theme/colorCodeID';
import React, {FC, Fragment, useState} from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';
import {CodeIDText} from '@components/molecules';

interface InputFieldProps {
  value?: string;
  placeHolder?: string;
  onChange?: (text: string) => void;
  title?: string;
  type?: 'text' | 'password' | 'number';
  errorText?: string;
  placeHolderTextColor?: string;
  isLabel?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  value,
  placeHolder,
  onChange,
  isLabel,
  title,
  type = 'text',
  errorText = '',
  placeHolderTextColor,
}) => {
  const [uiValue, setUiValue] = useState<string>(value ? value : '');

  let containerStyle: ViewStyle = styles.textContainer;

  if (errorText !== '')
    containerStyle = {...containerStyle, borderColor: ColorCodeID.error};

  return (
    <View style={styles.container}>
      {isLabel && (
        <Fragment>
          <CodeIDText
            fontSize={16}
            fontWeight="bold"
            textType="header"
            fontColors={ColorCodeID.text.subTitle}>
            {title}
          </CodeIDText>
          <Spacer height={8} />
        </Fragment>
      )}
      <TextInput
        keyboardType={type === 'text' ? 'ascii-capable' : 'number-pad'}
        style={containerStyle}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        value={uiValue}
        onChangeText={text => {
          setUiValue(text);
          onChange && onChange(text);
        }}
      />
      <Spacer height={5} />
      {errorText ? (
        <CodeIDText style={{color: 'red', paddingLeft: 5}}>
          {errorText}
        </CodeIDText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 0,
    color: ColorCodeID.text.black,
  },
});

export default InputField;
