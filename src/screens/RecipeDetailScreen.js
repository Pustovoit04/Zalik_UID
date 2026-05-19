import { StyleSheet, Text, View } from 'react-native';
import { recipes } from '../data/recipes';

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;

  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Рецепт не знайдено.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>

      <Text style={styles.description}>{recipe.description}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Час приготування: {recipe.time}</Text>
        <Text style={styles.infoText}>Складність: {recipe.difficulty}</Text>
      </View>

      <Text style={styles.note}>
        Список інгредієнтів та кроки приготування будуть детально оформлені на наступному етапі.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6B4F3A',
    lineHeight: 24,
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 15,
    color: '#3D2C1E',
    marginBottom: 6,
  },
  note: {
    fontSize: 15,
    color: '#8A5A36',
    lineHeight: 22,
    backgroundColor: '#FFF3E6',
    padding: 14,
    borderRadius: 12,
  },
  errorText: {
    fontSize: 18,
    color: '#B00020',
  },
});