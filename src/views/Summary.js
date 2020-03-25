import React from "react"
import { FlatList, View, Text } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"

const Summary = ({ navigation }) => {
  const { state, dispatch } = useStore()

  const sumArray = (arr) => {
    return arr.reduce((acc, item) => acc + item.amt, 0);
  }

  const sumDiapers =  (arr) => {
    return ""
  }
  
  return (
    <Container>
      <Text>Summary</Text>
        <FlatList
          data={state.data}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                borderRadius: 4,
                backgroundColor: "#F9F9F9",
                marginBottom: 16,
                padding: 16,
              }}>
              <Text>{item.date}</Text>
              <Text>EAT: {sumArray(item.eat)} oz. / {item.eat.length} Feedings</Text>
              <Text>SLEEP: {sumArray(item.sleep)} hours / {item.sleep.length} Times</Text>
              <Text>DIAPER: {sumDiapers(item.diapers)}</Text>
            </View>
          )}
          keyExtractor={item => item.date}
          ListEmptyComponent={
            <View>
              <Text>No data to display</Text>
            </View>
          }
        />
    </Container>
  )
}

export default Summary
