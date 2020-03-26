import React from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import { Container } from "../styles/Layout"
import useStore from "../hooks/useStore"

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
    padding: 16,
  },
  divider: {
    width: 2, 
    backgroundColor: "#31BFB7",
    marginLeft: 8,
    marginRight: 8
  },
  column: {
    flexDirection: "column"
  }
})

const Summary = ({ navigation }) => {
  const { state, dispatch } = useStore()

  const sumArray = (arr) => {
    return arr.reduce((acc, item) => acc + item.amt, 0);
  }

  const sumDiapers =  (arr) => {
    let wet = 0;
    let dirty = 0;
    for (let d of arr) {
      if (d.type === "wet") {
        wet++;
      } else {
        dirty++;
      }
    }
    return `${arr.length} times / ${wet} wet, ${dirty} dirty`
  }
  
  return (
    <Container>
      <Text>Summary</Text>
        <FlatList
          data={state.data}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>{item.date}</Text>
              <View style={styles.divider} />
              <View style={styles.column}>
                <Text>EAT: {sumArray(item.eat)} oz. / {item.eat.length} Feeding{item.eat.length > 1 && "s"}</Text>
                <Text>SLEEP: {sumArray(item.sleep)} hours / {item.sleep.length} Time{item.sleep.length > 1 && "s"}</Text>
                <Text>DIAPER: {sumDiapers(item.diaper)}</Text>
              </View>
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
