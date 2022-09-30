import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 327px;
  height: 49px;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme }) => `1px solid ${theme.colors.GRAY_5}`};
  border-radius: 6px;
  padding: 0 12px;
  margin-bottom: 10px;
`;

export const ContentHour = styled.View`
  padding-right: 10px;
  border-right-color: ${({ theme }) => theme.colors.GRAY_4};
  border-right-width: 1px;
`;

export const FoodHour = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_1};
  font-size: ${({ theme }) => theme.font_size.SM};
  font-family: ${({ theme }) => theme.font_family.BOLD};
`;

export const FoodName = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-size: ${({ theme }) => theme.font_size.LG};
  font-family: ${({ theme }) => theme.font_family.REGULAR};
  margin-left: 10px;
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 100px;
  background-color: ${({ theme, onTheDiet }) => theme.colors[onTheDiet ? 'GREEN_MID' : 'RED_MID']};
`;
