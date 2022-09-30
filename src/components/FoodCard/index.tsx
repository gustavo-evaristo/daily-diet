import { TouchableOpacityProps } from 'react-native';
import { Container, ContentHour, FoodHour, FoodName, Status } from './styles';

interface FoodCardProps extends TouchableOpacityProps {
  name: string;
  hour: string;
  onTheDiet: boolean;
}

export function FoodCard({ name, hour, onTheDiet, ...rest }: FoodCardProps) {
  return (
    <Container {...rest}>
      <ContentHour>
        <FoodHour>{hour}</FoodHour>
      </ContentHour>
      <FoodName>{name}</FoodName>

      <Status onTheDiet={onTheDiet} />
    </Container>
  );
}
