import React from "react"
import { View, Button, Text } from "react-native"

const RecordFeeding = ({ navigation }) => {
  return (
    <View>
      <Text>RecordFeeding</Text>
      <Button title='Go home' onPress={() => navigation.navigate("Dashboard")} />
    </View>
  )
}

export default RecordFeeding