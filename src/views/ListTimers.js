import React from "react"
import { Container } from "../styles/Layout"
import { FlatList, Text, StyleSheet, View } from "react-native"
import useStore from "../hooks/useStore"
import { Button } from "../styles/Button"
import { TouchableHighlight } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Feather"

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "#F9F9F9",
    marginBottom: 24,
  },
  icon: {},
})

const ListTimers = ({ route, navigation }) => {
  const timerType = route.params
  const { state, dispath } = useStore()

  let key = ""
  switch (timerType) {
    case "Feeding":
      key = "eat"
      break
    case "Diaper":
      key = "diaper"
      break
    case "Sleep":
      key = "sleep"
      break
    default:
      key = "eat"
  }

  return (
    <Container>
      <Text style={{ fontSize: 24, marginBottom: 16, fontFamily: "m-500" }}>
        {timerType} Timers
      </Text>
      <View>
        <FlatList
          data={state.timers[key]}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                borderRadius: 4,
                backgroundColor: "#F9F9F9",
                marginBottom: 24,
                padding: 16,
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Text style={{ fontSize: 16, fontFamily: "m-600" }}>Every {item.hours} hours</Text>
              <Icon
                style={styles.icon}
                name='edit-3'
                size={24}
                color='#ACACAC'
                onPress={() => navigation.navigate("CreateTimer", item)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={{ marginBottom: 24, fontFamily: "m-500" }}>
              <Text style={{ fontSize: 18 }}>Make a timer below to get started</Text>
            </View>
          }
        />
      </View>
      <Button onPress={() => navigation.navigate("CreateTimer")}>Create Timer</Button>
    </Container>
  )
}

export default ListTimers
