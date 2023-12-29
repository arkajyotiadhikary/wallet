import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';

import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {colors} from '../colors';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProps {
  btnStyle?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FC<ButtonProps> = props => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyle}>
      <RegularText textStyles={props.textStyle}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
