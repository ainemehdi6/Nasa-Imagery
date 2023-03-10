import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, ActivityIndicator } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useStarships } from "./hooks/useNasaImagery";


export const StarshipFeedScreen = () => {
  const StarshipRenderer = ({ item }: any) => {
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>Model : {item.date}</Text>
        </Card.Content>
        <Card.Actions style={styles.button}>
          <Button >Buy Starship</Button>
        </Card.Actions>
      </Card>
    );
  }

  const StarshipList = () => {
    const { data, status, error } = useStarships();

    if (status === "loading") {
      return <Text>Loading starships...</Text>;
    }

    if (error) {
      return <Text>An error occured while loading starships</Text>;
    }

    return (
      <FlatList
        data={data.results}
        renderItem={StarshipRenderer}
        keyExtractor={item => item.title}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {StarshipList()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'grey',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  block: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    margin: 'auto',
  },
});