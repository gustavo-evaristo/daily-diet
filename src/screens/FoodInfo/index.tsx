import { useState } from 'react';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { FoodInfoParams } from '../../@types/navigation';
import { Button, Loading, Modal } from '../../components';
import { getFoods, updateFood } from '../../storage';
import {
  Badge,
  Container,
  Content,
  ContentButton,
  ContentHeader,
  DateAndOrText,
  FoodDate,
  FoodDescription,
  FoodName,
  Header,
  IconBack,
  ScreenTitle,
  Status,
  TextBadge,
} from './styles';

export function FoodInfo() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const { id, name, description, date, hour, onTheDiet } = route.params as FoodInfoParams;

  function goBack() {
    return navigation.goBack();
  }

  function toHome() {
    return navigation.dispatch(
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

  function toEditFood() {
    navigation.navigate('editFood', {
      id,
      name,
      description,
      date,
      hour,
      onTheDiet,
    });
  }

  function handleModal() {
    setShowModal((state) => !state);
  }

  async function handleDeleteFood() {
    setLoading(true);

    const { foods } = await getFoods();

    const filteredFoods = foods.filter((food) => food.id !== id);

    await updateFood(filteredFoods);

    setLoading(false);

    toHome();
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {showModal && <Modal onCancel={handleModal} onConfirm={handleDeleteFood} />}

          <Container onTheDiet={onTheDiet}>
            <Header>
              <ContentHeader onPress={goBack}>
                <IconBack />
              </ContentHeader>

              <ScreenTitle>Refeição</ScreenTitle>
              <ContentHeader />
            </Header>

            <Content>
              <FoodName>{name}</FoodName>
              <FoodDescription>{description}</FoodDescription>

              <DateAndOrText>Data e hora</DateAndOrText>
              <FoodDate>{`${date} às ${hour}`}</FoodDate>

              <Badge>
                <Status onTheDiet={onTheDiet} />
                <TextBadge>{onTheDiet ? 'dentro' : 'fora'} da dieta</TextBadge>
              </Badge>

              <ContentButton>
                <Button title="Editar refeição" icon="edit" onPress={toEditFood} />
                <Button outline title="Excluir refeição" style={{ marginTop: 8 }} icon="delete" onPress={handleModal} />
              </ContentButton>
            </Content>
          </Container>
        </>
      )}
    </>
  );
}
