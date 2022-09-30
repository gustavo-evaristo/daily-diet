import { useState } from 'react';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { Button, Loading } from '../../components';
import { addFood } from '../../storage';
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

export function AddFood() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [onTheDiet, setOnTheDiet] = useState('');

  const [showLoading, setLoading] = useState(false);

  function onPressButtonDiet(value: string) {
    return setOnTheDiet(value);
  }

  function goBack() {
    return navigation.goBack();
  }

  async function onSubmit() {
    if (!name || !description || !date || !hour || !onTheDiet) return;

    setLoading(true);

    const id = uuid.v4() as string;

    await addFood({ id, name, description, date, hour, onTheDiet: onTheDiet === 'yes' });

    setTimeout(() => navigation.navigate('afterAddFood', { onTheDiet: onTheDiet === 'yes' }), 1000);
  }

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
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
              <Input onChangeText={(value: string) => setName(value)} />
            </ContentInput>

            <ContentInput>
              <Label>Descrição</Label>
              <Input multiline onChangeText={(value: string) => setDescription(value)} />
            </ContentInput>

            <ContentInput row>
              <WrapperInput>
                <Label>Data</Label>
                <Input onChangeText={(value: string) => setDate(value)} />
              </WrapperInput>

              <WrapperInput>
                <Label>Hora</Label>
                <Input onChangeText={(value: string) => setHour(value)} />
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

            <Button title="Cadastrar refeição" style={{ marginTop: 80 }} onPress={onSubmit} />
          </Content>
        </Container>
      )}
    </>
  );
}
