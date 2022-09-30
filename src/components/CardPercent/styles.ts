import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 327px;
  height: 102px;
  background-color: ${({ theme, isGreen }) => theme.colors[isGreen ? 'GREEN_LIGHT' : 'RED_LIGHT']};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextPercentage = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-family: ${({ theme }) => theme.font_family.BOLD};
  font-size: 32px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  font-size: ${({ theme }) => theme.font_size.MD};
`;

export const ArrowIcon = styled(MaterialCommunityIcons).attrs(({ theme, isGreen }) => ({
  name: isGreen ? 'arrow-top-right' : 'arrow-bottom-right',
  size: 22,
  color: theme.colors[isGreen ? 'GREEN_DARK' : 'RED_DARK'],
}))`
  right: 8px;
  top: 8px;
  position: absolute;
`;
