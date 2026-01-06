import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Desi Food' },
  { id: 2, name: 'Fast Food' },
  { id: 3, name: 'Burgers' },
  { id: 4, name: 'Pizza' },
  { id: 5, name: 'Desserts' },
  { id: 6, name: 'Drinks' },
];

export default function CategoriesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Text style={styles.header}>Categories</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />
        <TextInput
          placeholder="Search categories..."
          style={styles.searchInput}
        />
      </View>

      {/* Categories Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.categoryBox}>
            <Text style={styles.categoryText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },

  categoriesScroll: {
    marginVertical: 10,
  },

  categoryBox: {
    backgroundColor: '#ff7a00',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 16,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
