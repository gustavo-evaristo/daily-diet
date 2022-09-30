import { TouchableOpacityProps } from 'react-native';
import { ButtonIcon, ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
  outline?: boolean;
}

export function Button({ title, icon, outline, ...rest }: ButtonProps) {
  return (
    <Container outline={outline} {...rest}>
      {icon && <ButtonIcon name={icon} outline={outline} />}
      <ButtonText outline={outline}>{title}</ButtonText>
    </Container>
  );
}
