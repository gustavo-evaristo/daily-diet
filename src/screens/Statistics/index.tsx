import { useNavigation, useRoute } from '@react-navigation/native';
import { StatisticsParams } from '../../@types/navigation';
import {
  Card,
  Container,
  Content,
  ContentCard,
  ContentIconBack,
  DescriptionPercentage,
  Header,
  IconBack,
  TextPercentage,
  TextStatistics,
  TitleCard,
} from './styles';

export function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();

  const { foodAmount, foodsOffTheDiet, foodsOnTheDiet, foodsOnTheDietPercentage, foodSequence } =
    route.params as StatisticsParams;

  function goBack() {
    navigation.goBack();
  }

  const isGreen = foodsOnTheDietPercentage >= 50;

  return (
    <Container isGreen={isGreen}>
      <Header>
        <ContentIconBack onPress={goBack}>
          <IconBack isGreen={isGreen} />
        </ContentIconBack>
        <TextPercentage>{foodsOnTheDietPercentage}%</TextPercentage>
        <DescriptionPercentage>das refeições dentro da dieta</DescriptionPercentage>
      </Header>
      <Content>
        <TextStatistics>Estatísticas gerais</TextStatistics>

        <Card>
          <TitleCard>{foodSequence}</TitleCard>
          <DescriptionPercentage>Melhor sequencia de pratos dentro da dieta</DescriptionPercentage>
        </Card>

        <Card>
          <TitleCard>{foodAmount}</TitleCard>
          <DescriptionPercentage>Refeições registradas</DescriptionPercentage>
        </Card>

        <ContentCard>
          <Card small isGreen>
            <TitleCard>{foodsOnTheDiet}</TitleCard>
            <DescriptionPercentage>Refeições dentro da dieta</DescriptionPercentage>
          </Card>

          <Card small isRed>
            <TitleCard>{foodsOffTheDiet}</TitleCard>
            <DescriptionPercentage>Refeições fora da dieta</DescriptionPercentage>
          </Card>
        </ContentCard>
      </Content>
    </Container>
  );
}
