import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { recipes } from '../data/recipes';
import { colors } from '../constants/colors';

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
      <View style={styles.headerCard}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>

      <View style={styles.infoRow}>
        <View style={[styles.infoCard, styles.infoCardLeft]}>
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

const sharedShadow = {
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 3,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  headerCard: {
    backgroundColor: colors.lightAccent,
    padding: 18,
    borderRadius: 22,
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    ...sharedShadow,
  },
  infoCardLeft: {
    marginRight: 12,
  },
  infoIcon: {
    fontSize: 26,
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 13,
    color: colors.accent,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
  },
  section: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
    ...sharedShadow,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 14,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },
  bullet: {
    fontSize: 20,
    color: colors.accent,
    marginRight: 8,
    lineHeight: 24,
  },
  ingredientText: {
    flex: 1,
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '800',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 24,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});