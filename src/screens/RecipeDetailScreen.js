import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { recipes } from '../data/recipes';

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;

  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Рецепт не знайдено.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{recipe.title}</Text>

      <Text style={styles.description}>{recipe.description}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>⏱ Час приготування: {recipe.time}</Text>
        <Text style={styles.infoText}>⭐ Складність: {recipe.difficulty}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Інгредієнти</Text>

        {recipe.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.note}>
        Кроки приготування будуть додані на наступному етапі.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  centered: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
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
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  infoText: {
    fontSize: 15,
    color: '#3D2C1E',
    marginBottom: 6,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: '#8A5A36',
    marginRight: 8,
    lineHeight: 22,
  },
  ingredientText: {
    flex: 1,
    fontSize: 16,
    color: '#6B4F3A',
    lineHeight: 22,
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
    textAlign: 'center',
  },
});