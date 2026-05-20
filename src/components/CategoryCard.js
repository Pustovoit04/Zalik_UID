import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function CategoryCard({ category, recipeCount, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.badge}>{recipeCount}</Text>
        </View>

        <Text style={styles.description}>{category.description}</Text>
        <Text style={styles.actionText}>Переглянути рецепти →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 20,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.lightAccent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 32,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  badge: {
    minWidth: 28,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    backgroundColor: colors.accent,
    color: colors.card,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
  },
  description: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 20,
    marginBottom: 6,
  },
  actionText: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '700',
  },
});