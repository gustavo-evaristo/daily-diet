import styled, { css } from 'styled-components/native';
import OffTheDietImage from '../../assets/offTheDietImage.png';
import OnTheDietImage from '../../assets/onTheDietImage.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const ContentText = styled.View`
  margin-top: -24px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme, onTheDiet }) => (onTheDiet ? theme.colors.GREEN_DARK : theme.colors.RED_DARK)};
  font-size: 24px;
  font-family: ${({ theme }) => theme.font_family.BOLD};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: ${({ theme }) => theme.font_size.LG};
  text-align: center;

  ${({ isSpan }) =>
    isSpan &&
    css`
      font-family: ${({ theme }) => theme.font_family.BOLD};
    `}
`;

export const Image = styled.Image.attrs(({ onTheDiet }) => ({
  source: onTheDiet ? OnTheDietImage : OffTheDietImage,
}))`
  width: 224px;
  height: 288px;
`;
