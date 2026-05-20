import { FlatList, StyleSheet, Text, View } from 'react-native';

import CategoryCard from '../components/CategoryCard';
import { categories, recipes } from '../data/recipes';
import { colors } from '../constants/colors';

export default function CategoriesScreen({ navigation }) {
  const getRecipeCount = (categoryId) => {
    return recipes.filter((recipe) => recipe.categoryId === categoryId).length;
  };

  const renderCategory = ({ item }) => {
    return (
      <CategoryCard
        category={item}
        recipeCount={getRecipeCount(item.id)}
        onPress={() =>
          navigation.navigate('RecipeList', {
            categoryId: item.id,
            categoryTitle: item.title,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Книга рецептів</Text>
      <Text style={styles.subtitle}>
        Оберіть категорію та знайдіть страву для приготування
      </Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
});