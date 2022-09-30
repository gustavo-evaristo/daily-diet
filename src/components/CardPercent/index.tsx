import { TouchableOpacityProps } from 'react-native';
import { ArrowIcon, Container, Description, TextPercentage } from './styles';

interface CardPercentProps extends TouchableOpacityProps {
  value: number;
}

export function CardPercent({ value = 0, ...rest }: CardPercentProps) {
  const isGreen = value >= 50;
  return (
    <Container isGreen={isGreen} {...rest}>
      <ArrowIcon isGreen={isGreen} />
      <TextPercentage>{value}%</TextPercentage>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
