import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.topRow}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>

      <Text style={styles.description}>{recipe.description}</Text>

      <View style={styles.infoRow}>
        <View style={styles.infoBadge}>
          <Text style={styles.infoText}>⏱ {recipe.time}</Text>
        </View>

        <View style={styles.infoBadge}>
          <Text style={styles.infoText}>⭐ {recipe.difficulty}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
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
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: '700',
    color: colors.primary,
  },
  arrow: {
    fontSize: 28,
    color: colors.accent,
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 21,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoBadge: {
    backgroundColor: colors.lightAccent,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '700',
  },
});