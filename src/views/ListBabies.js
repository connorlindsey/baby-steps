import React from "react"
import { FlatList, Text, Image, View } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"

const ListBabies = ({ navigation }) => {
  const { state, dispatch } = useStore()
  
  return (
    <Container>
      <FlatList
        data={state.babies}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row", borderRadius: "4", backgroundColor: "#F9F9F9"}}>
            <Image style={{width: 125, height: 150}} source={{ uri: "https://source.unsplash.com/1600x900/?baby,toddler"}} />
            <View style={{ padding: 16}}>

            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Button onPress={() => navigation.navigate("CreateBaby", item)}>Edit</Button>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button secondary onPress={() => navigation.navigate("CreateBaby")}>
        Make a Baby ➕
      </Button>
    </Container>
  )
}

export default ListBabies
