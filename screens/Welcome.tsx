import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

import {Container} from '../components/shared';
import {colors} from '../components/colors';

import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';
// image
import background from '../assets/bgs/background_v1.png';

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const TopSection = styled.View`
  flex: 1;
  width: 100%;
  max-height: 55%;
`;

const TopImage = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  flex: 1;
  width: 100%;
  padding: 25px;
  justify-content: flex-end;
`;

const Welcome: FC = () => {
  return (
    <>
      <StatusBar />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{width: '70%', marginBottom: 25}}>
            Best Way to track your money
          </BigText>
          <SmallText textStyles={{width: '70%', marginBottom: 25}}>
            Best payment methods, connet your money to friends
          </SmallText>
          <RegularButton onPress={() => {}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
