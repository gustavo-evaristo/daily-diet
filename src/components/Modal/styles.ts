import styled from 'styled-components/native';

export const ModalContainer = styled.Modal.attrs({
  transparent: true,
  statusBarTranslucent: true,
  animationType: 'fade',
})``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000065;
`;

export const Content = styled.View`
  width: 327px;
  height: 192px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
`;

export const TextModal = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font_family.BOLD};
  color: ${({ theme }) => theme.colors.GRAY_2};
  text-align: center;
`;

export const ContentButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
