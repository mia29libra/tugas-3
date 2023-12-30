import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./src/images/taschannel.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/taschannelmotif.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/taschannelcute.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/taschannelyellow.jpg')}
          style={styles.image}
        />
         <Image
          source={require('./src/images/taschannelpink.jpg')}
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