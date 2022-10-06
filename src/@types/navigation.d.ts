export interface StatisticsParams {
  foodsOnTheDietPercentage: number;
  foodAmount: number;
  foodsOnTheDiet: number;
  foodsOffTheDiet: number;
  foodSequence: number;
}

export interface AfterAddFoodProps {
  onTheDiet: boolean;
}

export interface FoodInfoParams {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  onTheDiet: boolean;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatisticsParams;
      addFood: undefined;
      afterAddFood: AfterAddFoodProps;
      foodInfo: FoodInfoParams;
      editFood: FoodInfoParams;
    }
  }
}
