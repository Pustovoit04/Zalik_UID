import { FlatList, StyleSheet, Text, View } from 'react-native';

import RecipeCard from '../components/RecipeCard';
import { categories, recipes } from '../data/recipes';
import { colors } from '../constants/colors';

export default function RecipeListScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const category = categories.find((item) => item.id === categoryId);

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
      <Text style={styles.screenTitle}>{category?.title || 'Рецепти'}</Text>

      <Text style={styles.subtitle}>
        {category?.description || 'Список рецептів вибраної категорії'}
      </Text>

      <Text style={styles.countText}>
        Знайдено рецептів: {filteredRecipes.length}
      </Text>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: colors.background,
    padding: 16,
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 22,
    marginBottom: 10,
  },
  countText: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 32,
  },
});