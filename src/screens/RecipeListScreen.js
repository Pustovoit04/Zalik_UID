import { FlatList, StyleSheet, Text, View } from 'react-native';

import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

export default function RecipeListScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.categoryId === categoryId
  );

  const renderRecipe = ({ item }) => {
    return (
      <RecipeCard
        recipe={item}
        onPress={() =>
          navigation.navigate('RecipeDetail', {
            recipeId: item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Рецепти</Text>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            У цій категорії поки немає рецептів.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B4F3A',
    textAlign: 'center',
    marginTop: 32,
  },
});