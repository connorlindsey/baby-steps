import React, { useState } from "react"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import { Input } from "../styles/Form"
import useStore from "../hooks/useStore"

const RecordDiaper = ({ navigation }) => {
  const { dispatch } = useStore()
  const [formData, setFormData] = useState({
    time: "",
    type: "",
    notes: "",
  })

  const handleInput = (text, field) => {
    setFormData({
      ...formData,
      [field]: text,
    })
  }

  const saveDiaper = () => {
    dispatch({ type: "create-diaper-record", payload: formData })
    navigation.navigate("Dashboard")
  }

  return (
    <Container>
      <Input
        onChangeText={text => handleInput(text, "time")}
        placeholder='Time'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "type")}
        placeholder='Type'
        placeholderTextColor='#353535'
      />
      <Input
        onChangeText={text => handleInput(text, "notes")}
        placeholder='Notes'
        placeholderTextColor='#353535'
      />
      <Button onClick={saveDiaper}>Save</Button>
    </Container>
  )
}

export default RecordDiaper
