import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://example.com/image1.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://example.com/image2.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://example.com/image3.jpg' }}
          style={styles.image}
        />
        {/* Tambahkan lebih banyak gambar sesuai kebutuhan */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default App;