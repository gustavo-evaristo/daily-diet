import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddFood, AfterAddFood, EditFood, FoodInfo, Home, Statistics } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="addFood" component={AddFood} />

      <Screen name="editFood" component={EditFood} />

      <Screen name="afterAddFood" component={AfterAddFood} />

      <Screen name="foodInfo" component={FoodInfo} />
    </Navigator>
  );
}
