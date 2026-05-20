import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { recipes } from '../data/recipes';

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;

  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorTitle}>Рецепт не знайдено</Text>
        <Text style={styles.errorText}>
          Спробуйте повернутися назад і вибрати інший рецепт.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>⏱</Text>
          <Text style={styles.infoLabel}>Час</Text>
          <Text style={styles.infoValue}>{recipe.time}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>⭐</Text>
          <Text style={styles.infoLabel}>Складність</Text>
          <Text style={styles.infoValue}>{recipe.difficulty}</Text>
        </View>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Кроки приготування</Text>

        {recipe.steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>

            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>
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
    padding: 24,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#6B4F3A',
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 13,
    color: '#8A5A36',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3D2C1E',
    textAlign: 'center',
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
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#8A5A36',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#6B4F3A',
    lineHeight: 24,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#6B4F3A',
    textAlign: 'center',
    lineHeight: 22,
  },
});