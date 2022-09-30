import styled, { css } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 327px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme, outline }) => (outline ? 'transparent' : theme.colors.GRAY_2)};
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ outline, theme }) =>
    outline &&
    css`
      border: 1px solid ${theme.colors.GRAY_1};
    `}
`;

export const ButtonText = styled.Text`
  color: ${({ theme, outline }) => theme.colors[outline ? 'GRAY_1' : 'WHITE']};
  font-size: ${({ theme }) => theme.font_size.MD};
  font-family: ${({ theme }) => theme.font_family.BOLD};
`;

export const ButtonIcon = styled(AntDesign).attrs(({ theme, name, outline }) => ({
  size: 18,
  name,
  color: theme.colors[outline ? 'GRAY_1' : 'WHITE'],
}))`
  margin-right: 5px;
`;
