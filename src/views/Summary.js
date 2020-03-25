import React from "react"
import { View, Button, Text } from "react-native"

const Summary = ({ navigation }) => {
  return (
    <View>
      <Text>Summary</Text>
      <Button title='Record' onPress={() => navigation.navigate("RecordFeeding")} />
    </View>
  )
}

export default Summary
