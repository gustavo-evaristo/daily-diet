import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export interface Food {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  onTheDiet: boolean;
}

export async function getFoods() {
  const dataFoods = await useAsyncStorage('foods').getItem();
  const dataDays = await useAsyncStorage('days').getItem();

  const foods = JSON.parse(dataFoods) || [];
  const days = JSON.parse(dataDays) || [];

  return {
    foods,
    days,
  };
}

async function addFoodDays(day: string) {
  try {
    const data = await useAsyncStorage('days').getItem();

    const days = JSON.parse(data);

    if (days.find((item) => item === day)) return;

    await useAsyncStorage('days').setItem(JSON.stringify([day, ...days]));
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function addFood(food: Food) {
  try {
    const { foods } = await getFoods();

    await useAsyncStorage('foods').setItem(JSON.stringify([food, ...foods]));

    await addFoodDays(food.date);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateFood(foods: Food[]) {
  await useAsyncStorage('foods').setItem(JSON.stringify(foods));
}

export async function clearStorage() {
  await useAsyncStorage('foods').setItem(JSON.stringify([]));
  await useAsyncStorage('days').setItem(JSON.stringify([]));
}
