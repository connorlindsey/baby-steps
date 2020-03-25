import React from "react"
import { View, Button, Text } from "react-native"
import useStore from "../hooks/useStore"
import { Container } from "../styles/Layout"

const Dashboard = ({ navigation }) => {
  const store = useStore();

  return (
    <Container>
      <Button title='RecordFeeding' onPress={() => navigation.navigate("RecordFeeding")} />
      <Button title='Summary' onPress={() => navigation.navigate("Summary")} />
    </Container>
  )
}

export default Dashboard
