import AnimatedLottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AnimatedLoading = styled(AnimatedLottieView)`
  width: 250px;
  height: 250px;
  background: transparent;
`;
