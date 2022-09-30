import { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, CardPercent, FoodCard } from '../../components';
import { Food, getFoods } from '../../storage';
import { Avatar, Container, ContentButton, FoodDay, Header, Logo, TextFoods } from './styles';

interface FoodData {
  day: string;
  data: Food[];
}

export function Home() {
  const [data, setData] = useState<FoodData[]>([]);
  const navigation = useNavigation();

  function toStatistics() {
    navigation.navigate('statistics', {
      foodAmount: 109,
      foodsOffTheDiet: 10,
      foodsOnTheDiet: 99,
      foodsOnTheDietPercentage: 90.86,
    });
  }

  function toAddFood() {
    navigation.navigate('addFood');
  }

  function toFoodInfo(values) {
    navigation.navigate('foodInfo', values);
  }

  async function handleFoods() {
    const { days, foods } = await getFoods();

    days.map((day) => {
      let foodData = [];

      foods.map((food) => {
        if (food.date === day) {
          foodData = [...foodData, food];
        }
      });

      setData((state) => [...state, { day, data: foodData }]);
    });
  }

  useEffect(() => {
    handleFoods();
  }, []);

  return (
    <Container>
      <Header>
        <Logo />
        <Avatar />
      </Header>

      <CardPercent value={90.86} onPress={toStatistics} />

      <ContentButton>
        <TextFoods>Refeições</TextFoods>
        <Button title="Nova refeição" icon="plus" onPress={toAddFood} />
      </ContentButton>

      <SectionList
        sections={data}
        keyExtractor={(_, index) => index.toString()}
        renderSectionHeader={({ section }) => <FoodDay>{section.day}</FoodDay>}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
        renderItem={({ item, index }) => (
          <FoodCard
            key={index}
            name={item.name}
            hour={item.hour}
            onTheDiet={item.onTheDiet}
            onPress={() => toFoodInfo(item)}
          />
        )}
      />
    </Container>
  );
}
