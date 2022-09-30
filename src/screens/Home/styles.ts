import styled from 'styled-components/native';
import AvatarImage from '../../assets/avatar.png';
import LogoImage from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  align-items: center;
`;

export const ContainerScroll = styled.ScrollView``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Logo = styled.Image.attrs({
  source: LogoImage,
})``;

export const Avatar = styled.Image.attrs({
  source: AvatarImage,
})``;

export const TextFoods = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: ${({ theme }) => theme.font_size.MD};
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  margin-bottom: 8px;
`;

export const ContentButton = styled.View`
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 0 32px;
`;

export const FoodDay = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: ${({ theme }) => theme.font_size.LG};
  font-family: ${({ theme }) => theme.font_family.BOLD};
  margin: 15px 0;
`;
