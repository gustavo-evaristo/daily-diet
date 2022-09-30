import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme, isGreen }) => theme.colors[isGreen ? 'GREEN_LIGHT' : 'RED_LIGHT']};
`;

export const Header = styled.View`
  width: 100%;
  height: 190px;
  padding-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const ContentIconBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  top: 60px;
  left: 20px;
`;

export const IconBack = styled(MaterialCommunityIcons).attrs(({ theme, isGreen }) => ({
  size: 25,
  name: 'arrow-left',
  color: theme.colors[isGreen ? 'GREEN_DARK' : 'RED_DARK'],
}))``;

export const TextPercentage = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: 32px;
  font-family: ${({ theme }) => theme.font_family.BOLD};
`;

export const DescriptionPercentage = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-size: ${({ theme }) => theme.font_size.MD};
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 36px 20px;
  align-items: center;
`;

export const TextStatistics = styled(TextPercentage)`
  font-size: ${({ theme }) => theme.font_size.MD};
  margin-bottom: 26px;
`;

export const Card = styled.View`
  width: ${({ small }) => (small ? '157px' : '327px')};
  height: 89px;
  border-radius: 8px;
  background-color: ${({ theme, isGreen, isRed }) =>
    theme.colors[isGreen ? 'GREEN_LIGHT' : isRed ? 'RED_LIGHT' : 'GRAY_6']};
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: 16px;
`;

export const TitleCard = styled(TextPercentage)`
  font-size: 24px;
`;

export const ContentCard = styled.View`
  width: 327px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
