import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { recipes } from '../data/recipes';

export default function RecipeListScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.categoryId === categoryId
  );

  const renderRecipe = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
        ]}
        onPress={() =>
          navigation.navigate('RecipeDetail', {
            recipeId: item.id,
          })
        }
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>⏱ {item.time}</Text>
          <Text style={styles.infoText}>⭐ {item.difficulty}</Text>
        </View>
      </Pressable>
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
          <Text style={styles.emptyText}>У цій категорії поки немає рецептів.</Text>
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6B4F3A',
    lineHeight: 20,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14,
    color: '#8A5A36',
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 16,
    color: '#6B4F3A',
    textAlign: 'center',
    marginTop: 32,
  },
});