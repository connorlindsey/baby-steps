import React, { useState } from "react"
import { Container } from "../styles/Layout"
import { Button } from "../styles/Button"
import { Input } from "../styles/Form"
import useStore from "../hooks/useStore"

const RecordFeeding = ({ navigation }) => {
  const { state, dispatch } = useStore()
  const [formData, setFormData] = useState({
    time: "",
    amount: "",
    notes: ""
  })

  const handleInput = (text, field) => {
    setFormData({
      ...formData,
      [field]: text,
    })
  }

  const saveFeeding = () => {
    console.log('formData', formData)
    let num = parseInt(formData.amount) || 0;
    let payload = { ...formData }
    console.log('payload', payload)
    payload.amount = num;
    dispatch({ type: "create-feeding", payload })
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
        onChangeText={text => handleInput(text, "amount")}
        placeholder='Amount'
        placeholderTextColor='#353535'
        keyboardType="numeric"
      />
      <Input
        onChangeText={text => handleInput(text, "notes")}
        placeholder='Notes'
        placeholderTextColor='#353535'
      />
      <Button onPress={saveFeeding}>Save</Button>
    </Container>
  )
}

export default RecordFeeding
