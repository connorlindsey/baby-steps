import React from "react"
import { FlatList, Text, Image, View } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"
import { TouchableHighlight } from "react-native-gesture-handler"

const ListBabies = ({ navigation }) => {
  const { state, dispatch } = useStore()

  return (
    <Container>
      <Text>Your Babies</Text>
      <View>
        <FlatList
          data={state.babies}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                borderRadius: 4,
                backgroundColor: "#F9F9F9",
                marginBottom: 24
              }}>
              <Image
                style={{ width: 125, height: 150, borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
                source={{ uri: "https://source.unsplash.com/1600x900/?baby,toddler" }}
              />
              <View style={{ padding: 16 }}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <TouchableHighlight onPress={() => navigation.navigate("CreateBaby", item)}>
                  <Text>Edit</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={{ marginBottom:  24}}>
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
