import React from "react"
import { View, Button, Text } from "react-native"

const CreateTimer = ({ navigation }) => {
  return (
    <View>
      <Text>CreateTimer</Text>
      <Button title='Record' onPress={() => navigation.navigate("RecordFeeding")} />
    </View>
  )
}

export default CreateTimer
