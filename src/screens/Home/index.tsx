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
  const [foodsOnTheDietPercentage, setFoodsOnTheDietPercentage] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [foodsOnTheDiet, setFoodsOnTheDiet] = useState(0);
  const [foodsOffTheDiet, setFoodsOffTheDiet] = useState(0);
  const [foodSequence, setFoodSequence] = useState(0);

  const navigation = useNavigation();

  function toStatistics() {
    navigation.navigate('statistics', {
      foodAmount,
      foodsOffTheDiet,
      foodsOnTheDiet,
      foodsOnTheDietPercentage,
      foodSequence,
    });
  }

  function toAddFood() {
    navigation.navigate('addFood');
  }

  function toFoodInfo(values) {
    navigation.navigate('foodInfo', values);
  }

  function getFoodStats(foods: any[]) {
    const amountFoods = foods.length;

    setFoodAmount(amountFoods);

    const amountFoodsOnTheDiet = foods.filter((food) => food.onTheDiet).length;

    setFoodsOnTheDiet(amountFoodsOnTheDiet);

    const amountFoodsOffTheDiet = foods.filter((food) => !food.onTheDiet).length;

    setFoodsOffTheDiet(amountFoodsOffTheDiet);

    const percentage = (amountFoodsOnTheDiet * 100) / amountFoods;

    setFoodsOnTheDietPercentage(Number(percentage.toFixed(0)));

    let sequence = 0;
    let largerSequence = 0;

    foods.map((food) => {
      if (food.onTheDiet) {
        sequence += 1;
      } else {
        if (largerSequence < sequence) {
          largerSequence = sequence;
        }
        sequence = 0;
      }
    });

    setFoodSequence(largerSequence > sequence ? largerSequence : sequence);
  }

  async function handleFoods() {
    const { days, foods } = await getFoods();
    let foodData = [];

    days.map((day) => {
      foods.map((food) => {
        if (food.date === day) {
          foodData = [...foodData, food];
        }
      });

      setData((state) => [...state, { day, data: foodData }]);

      getFoodStats(foods);
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

      <CardPercent value={foodsOnTheDietPercentage} onPress={toStatistics} />

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
