import React from "react"
import { Container } from "../styles/Layout"
import { FlatList, Text, Image, View } from "react-native"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"
import { TouchableHighlight } from "react-native-gesture-handler"

const ListTimers = ({ navigation }) => {
  const { state, dispath } = useStore()

  return (
    <Container>
      <View>
        <FlatList
          data={state.timers}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                borderRadius: 4,
                backgroundColor: "#F9F9F9",
                marginBottom: 24,
                padding: 16,
                justifyContent: "space-between"
              }}>
              <Text>
                {item.type} - {item.frequency}
              </Text>
              <TouchableHighlight onPress={() => navigation.navigate("CreateTimer", item)}>
                <Text>Edit</Text>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={{ marginBottom: 24 }}>
              <Text>Make a timer below to get started</Text>
            </View>
          }
        />
      </View>
      <Button onPress={() => navigation.navigate("CreateTimer")}>Create Timer</Button>
    </Container>
  )
}

export default ListTimers
