import React from "react"
import { FlatList, Text, Image, View, StyleSheet } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"
import Icon from "react-native-vector-icons/Feather"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

const styles = StyleSheet.create({
  title: {
    marginTop: 64,
    fontSize: 24,
    marginBottom: 24,
    fontFamily: "m-500"
  },
  card: {
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "#F9F9F9",
    marginBottom: 24,
  },
  icon: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  name: {
    color: "#31bfb7",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "m-700"
  },
  age: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "400",
    letterSpacing: .5,
    fontFamily: "m-500"
  }
})

const ListBabies = ({ navigation }) => {
  const { state, dispatch } = useStore()

  const viewBaby = id => {
    dispatch({ type: "view-baby", payload: id })
    navigation.navigate("Dashboard")
  }

  return (
    <Container>
      <Text style={styles.title}>Your Babies</Text>
      <View>
        <FlatList
          data={state.babies}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableWithoutFeedback onPress={() => viewBaby(item.id)}>
                <Image
                  style={{
                    width: 150,
                    height: 175,
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                  }}
                  source={{ uri: item.image }}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => viewBaby(item.id)}>
                <View style={{ padding: 16 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.age}>{item.age}</Text>
                </View>
              </TouchableWithoutFeedback>
              <Icon
                style={styles.icon}
                name='edit-3'
                size={24}
                color='#ACACAC'
                onPress={() => navigation.navigate("CreateBaby", item)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={{ marginBottom: 24 }}>
              <Text>Make a baby below to get started</Text>
            </View>
          }
        />
      </View>
      <Button secondary onPress={() => navigation.navigate("CreateBaby")}>
        Make a Baby ➕
      </Button>
    </Container>
  )
}

export default ListBabies
