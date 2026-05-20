import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.title}>{recipe.title}</Text>

      <Text style={styles.description}>{recipe.description}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>⏱ {recipe.time}</Text>
        <Text style={styles.infoText}>⭐ {recipe.difficulty}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});