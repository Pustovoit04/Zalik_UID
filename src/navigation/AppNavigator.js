import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFF3E6',
          },
          headerTintColor: '#3D2C1E',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: '#FFF8F0',
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: 'Категорії рецептів' }}
        />

        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle,
          })}
        />

        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ title: 'Деталі рецепта' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}