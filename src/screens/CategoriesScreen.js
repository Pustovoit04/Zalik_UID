import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data/recipes';

export default function CategoriesScreen({ navigation }) {
  const renderCategory = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
        ]}
        onPress={() =>
          navigation.navigate('RecipeList', {
            categoryId: item.id,
            categoryTitle: item.title,
          })
        }
      >
        <Text style={styles.icon}>{item.icon}</Text>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </Pressable>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    fontSize: 36,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3D2C1E',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6B4F3A',
    lineHeight: 20,
  },
});