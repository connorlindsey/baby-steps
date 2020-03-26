import React from "react"
import { FlatList, Text, Image, View, StyleSheet } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"
import Icon from "react-native-vector-icons/Feather"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

const styles = StyleSheet.create({
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
})

const ListBabies = ({ navigation }) => {
  const { state, dispatch } = useStore()

  const viewBaby = id => {
    dispatch({ type: "view-baby", payload: id })
    navigation.navigate("Dashboard")
  }

  return (
    <Container>
      <Text>Your Babies</Text>
      <View>
        <FlatList
          data={state.babies}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableWithoutFeedback onPress={() => viewBaby(item.id)}>
                <Image
                  style={{
                    width: 125,
                    height: 150,
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                  }}
                  source={{ uri: item.image }}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => viewBaby(item.id)}>
                <View style={{ padding: 16 }}>
                  <Text>{item.name}</Text>
                  <Text>{item.age}</Text>
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
