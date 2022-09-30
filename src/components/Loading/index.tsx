import loadAnimation from '../../assets/loading.json';
import { AnimatedLoading, Container } from './styles';

export function Loading() {
  return (
    <Container>
      <AnimatedLoading source={loadAnimation} autoPlay loop />
    </Container>
  );
}
