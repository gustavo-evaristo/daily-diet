import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { AfterAddFoodProps } from '../../@types/navigation';
import { Button } from '../../components';
import { Container, ContentText, Description, Image, Title } from './styles';

export function AfterAddFood() {
  const route = useRoute();

  const navigate = useNavigation();

  const { onTheDiet } = route.params as AfterAddFoodProps;

  function toHome() {
    return navigate.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'home',
          },
        ],
      }),
    );
  }

  return (
    <Container>
      <ContentText>
        {onTheDiet ? (
          <>
            <Title onTheDiet={true}>Continue assim!</Title>
            <Description>
              Você continua <Description isSpan>dentro da dieta.</Description> Muito bem!
            </Description>
          </>
        ) : (
          <>
            <Title onTheDiet={false}>Que pena!</Title>
            <Description>
              Você <Description isSpan>saiu da dieta.</Description> dessa vez, mas continue se esforçando e não desista!
            </Description>
          </>
        )}
      </ContentText>

      <Image onTheDiet={onTheDiet} />

      <Button title="Ir para página inicial" style={{ width: '55%', marginTop: 40 }} onPress={toHome} />
    </Container>
  );
}
