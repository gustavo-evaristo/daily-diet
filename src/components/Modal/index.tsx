import { ModalProps } from 'react-native';
import { Button } from '../Button';
import { Container, Content, ContentButton, ModalContainer, TextModal } from './styles';

interface ModalComponentProps extends ModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export function Modal({ onCancel, onConfirm, ...rest }: ModalComponentProps) {
  return (
    <ModalContainer {...rest}>
      <Container>
        <Content>
          <TextModal>Deseja realmente excluir o registro da refeição?</TextModal>

          <ContentButton>
            <Button title="Cancelar" outline style={{ width: '48%' }} onPress={onCancel} />
            <Button title="Sim, excluir" style={{ width: '48%' }} onPress={onConfirm} />
          </ContentButton>
        </Content>
      </Container>
    </ModalContainer>
  );
}
