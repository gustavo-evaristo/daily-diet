import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_5};
`;

export const Header = styled.View`
  width: 100%;
  height: 160px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeader = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 20%;
  padding-left: 14px;
`;

export const IconBack = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 25,
  name: 'arrow-left',
  color: theme.colors.GRAY_2,
}))``;

export const ScreenTitle = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-family: ${({ theme }) => theme.font_family.BOLD};
  font-size: 18px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -42px;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  flex-direction: column;
`;

export const ContentInput = styled.View`
  width: 100%;
  margin-bottom: 24px;

  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-family: ${({ theme }) => theme.font_family.BOLD};
  font-size: ${({ theme }) => theme.font_size.LG};
  margin-bottom: 6px;
`;

export const Input = styled.TextInput`
  border: ${({ theme }) => `1px solid ${theme.colors.GRAY_5}`};
  border-radius: 6px;
  width: 100%;
  height: ${({ multiline }) => (multiline ? '120px' : '44px')};
  padding: 14px;
`;

export const WrapperInput = styled.View`
  width: 48%;
`;

export const ButtonDiet = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 48%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ active, green, theme }) =>
    active &&
    css`
      border: 1px solid ${theme.colors[green ? 'GREEN_DARK' : 'RED_DARK']};
      background-color: ${theme.colors[green ? 'GREEN_LIGHT' : 'RED_LIGHT']};
    `}
`;

export const TextDiet = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-family: ${({ theme }) => theme.font_family.BOLD};
  font-size: ${({ theme }) => theme.font_size.MD};
  margin-left: 6px;
`;

export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme, green }) => theme.colors[green ? 'GREEN_DARK' : 'RED_DARK']};
`;
