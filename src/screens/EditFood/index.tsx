import { useState } from 'react';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { FoodInfoParams } from '../../@types/navigation';
import { Button } from '../../components';
import { getFoods, updateFood } from '../../storage';
import {
  ButtonDiet,
  Container,
  Content,
  ContentHeader,
  ContentInput,
  Header,
  IconBack,
  Input,
  Label,
  ScreenTitle,
  Status,
  TextDiet,
  WrapperInput,
} from './styles';

export function EditFood() {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as FoodInfoParams;

  const [name, setName] = useState(params.name);
  const [description, setDescription] = useState(params.description);
  const [date, setDate] = useState(params.date);
  const [hour, setHour] = useState(params.hour);
  const [onTheDiet, setOnTheDiet] = useState(params.onTheDiet ? 'yes' : 'no');

  function onPressButtonDiet(value: string) {
    return setOnTheDiet(value);
  }

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

  async function onSubmit() {
    if (!name || !description || !date || !hour || !onTheDiet) return;

    const { foods } = await getFoods();

    const filteredFoods = foods.map((food) => {
      if (food.id === params.id) {
        return {
          name,
          description,
          date,
          hour,
          onTheDiet,
        };
      } else {
        return food;
      }
    });

    await updateFood(filteredFoods);

    toHome();
  }

  return (
    <Container>
      <Header>
        <ContentHeader onPress={goBack}>
          <IconBack />
        </ContentHeader>

        <ScreenTitle>Nova Refeição</ScreenTitle>
        <ContentHeader />
      </Header>

      <Content>
        <ContentInput>
          <Label>Nome</Label>
          <Input value={name} onChangeText={(value: string) => setName(value)} />
        </ContentInput>

        <ContentInput>
          <Label>Descrição</Label>
          <Input multiline value={description} onChangeText={(value: string) => setDescription(value)} />
        </ContentInput>

        <ContentInput row>
          <WrapperInput>
            <Label>Data</Label>
            <Input value={date} onChangeText={(value: string) => setDate(value)} />
          </WrapperInput>

          <WrapperInput>
            <Label>Hora</Label>
            <Input value={hour} onChangeText={(value: string) => setHour(value)} />
          </WrapperInput>
        </ContentInput>

        <ContentInput>
          <Label>Está dentro da dieta?</Label>
          <ContentInput row>
            <ButtonDiet onPress={() => onPressButtonDiet('yes')} active={onTheDiet === 'yes'} green>
              <Status green />
              <TextDiet>Sim</TextDiet>
            </ButtonDiet>
            <ButtonDiet onPress={() => onPressButtonDiet('no')} active={onTheDiet === 'no'} red>
              <Status />
              <TextDiet>Não</TextDiet>
            </ButtonDiet>
          </ContentInput>
        </ContentInput>

        <Button title="Atualizar refeição" style={{ marginTop: 80 }} onPress={onSubmit} />
      </Content>
    </Container>
  );
}
