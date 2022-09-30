import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme, onTheDiet }) => theme.colors[onTheDiet ? 'GREEN_LIGHT' : 'RED_LIGHT']};
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

export const FoodName = styled(ScreenTitle)`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const FoodDescription = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  font-size: ${({ theme }) => theme.font_size.LG};
`;

export const DateAndOrText = styled(ScreenTitle)`
  font-size: ${({ theme }) => theme.font_size.MD};
  margin-top: 20px;
`;

export const FoodDate = styled(FoodDescription)``;

export const Badge = styled.View`
  width: 144px;
  height: 34px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.GRAY_6};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 4px;
`;

export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme, onTheDiet }) => theme.colors[onTheDiet ? 'GREEN_DARK' : 'RED_DARK']};
  margin-right: 8px;
`;

export const TextBadge = styled(FoodDate)`
  font-size: ${({ theme }) => theme.colors.SM};
`;

export const ContentButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 32px;
`;
