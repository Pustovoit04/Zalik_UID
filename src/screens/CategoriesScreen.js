import { FlatList, StyleSheet, Text, View } from 'react-native';

import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/recipes';

export default function CategoriesScreen({ navigation }) {
  const renderCategory = ({ item }) => {
    return (
      <CategoryCard
        category={item}
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
      <Text style={styles.screenTitle}>Оберіть категорію</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
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
});