import {ColorValue, TextProps, TextStyle} from 'react-native';
import {CodeIDTextType} from './CodeIDText.preset';

export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <CodeIDText size={16}>Some text</CodeIDText>
   * <CodeIDText size="16">Some text</CodeIDText>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <CodeIDText fontWeight="normal">Some text</CodeIDText>
   * **/

  fontWeight?: 'normal' | 'semiBold' | 'bold' | 'extraBold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <CodeIDText textType="body">Some text</CodeIDText>
   * **/
  textType?: CodeIDTextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <CodeIDText color="#343A40">Some text</CodeIDText>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <CodeIDText lineHeight={20}>Some text</CodeIDText>
   * **/
  textLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <CodeIDText style={{numberOfLines: 1}}>Some text</CodeIDText>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
