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
    marginLeft: 16,
    marginRight: 18,
  },
  column: {
    flexDirection: "column",
  },
  date: {
    width: 40,
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "m-400",
  },
  title: {
    fontSize: 14,
    textTransform: "uppercase",
    width: 80,
    fontFamily: "m-600",
  },
  info: {
    fontSize: 14,
    fontFamily: "m-500",
  },
})

const Summary = () => {
  const { state } = useStore()

  const sumArray = arr => {
    return arr.reduce((acc, item) => acc + item.amt, 0)
  }

  const sumDiapers = arr => {
    let wet = 0
    let dirty = 0
    for (let d of arr) {
      if (d.type === "wet") {
        wet++
      } else {
        dirty++
      }
    }
    return `${arr.length} times / ${wet} wet, ${dirty} dirty`
  }

  return (
    <Container>
      <FlatList
        data={Object.keys(state.data)}
        renderItem={({ item }) => {
          let i = state.data[item]
          return (
            <View style={styles.card}>
              <Text style={styles.date}>{item}</Text>
              <View style={styles.divider} />
              <View style={styles.column}>
                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                  <Text style={styles.title}>Eat</Text>
                  <Text style={styles.info}>
                    {sumArray(i.eat)} oz. / {i.eat.length} Feeding{i.eat.length > 1 && "s"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                  <Text style={styles.title}>Sleep </Text>
                  <Text style={styles.info}>
                    {sumArray(i.sleep)} hours / {i.sleep.length} Time
                    {i.sleep.length > 1 && "s"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                  <Text style={styles.title}>Diaper </Text>
                  <Text style={styles.info}>{sumDiapers(i.diaper)}</Text>
                </View>
              </View>
            </View>
          )
        }}
        keyExtractor={item => item}
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
