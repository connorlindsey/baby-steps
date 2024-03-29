import React, { Component } from "react"
import PropTypes from "prop-types"
import { Picker, View, StyleSheet, Text } from "react-native"
import styled from "styled-components/native"

const StyledText = styled.Text`
  font-size: 19px;
  height: 42px;
  line-height: 42px;
  font-family: "m-600";
`

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  picker: {
    flex: 1,
    fontFamily: "m-500"
  }
})


const MAX_HOURS = 23
const MAX_MINUTES = 59

export default class TimePicker extends Component {
  static propTypes = {
    selectedHours: PropTypes.number,
    selectedMinutes: PropTypes.number,
    onChange: PropTypes.func,
    hoursUnit: PropTypes.string,
    minutesUnit: PropTypes.string,
  }

  static defaultProps = {
    selectedHours: 0,
    selectedMinutes: 0,
    onChange: null,
    hoursUnit: "",
    minutesUnit: "",
  }

  constructor(props) {
    super(props)
    const { selectedHours, selectedMinutes } = props
    this.state = {
      selectedHours,
      selectedMinutes,
    }
  }

  getHoursItems = () => {
    const items = []
    const { hoursUnit } = this.props
    for (let i = 0; i <= MAX_HOURS; i++) {
      items.push(<Picker.Item key={i} value={i} label={`${i.toString()}${hoursUnit}`} />)
    }
    return items
  }

  getMinutesImtes = () => {
    const items = []
    const { minutesUnit } = this.props
    for (let i = 0; i <= MAX_MINUTES; i++) {
      items.push(<Picker.Item key={i} value={i} label={`${i.toString()}${minutesUnit}`} />)
    }
    return items
  }

  handleChangeHours = itemValue => {
    const { onChange } = this.props
    this.setState(
      {
        selectedHours: itemValue,
      },
      () => {
        const { selectedHours, selectedMinutes } = this.state
        onChange(selectedHours, selectedMinutes)
      }
    )
  }

  handleChangeMinutes = itemValue => {
    const { onChange } = this.props
    this.setState(
      {
        selectedMinutes: itemValue,
      },
      () => {
        const { selectedHours, selectedMinutes } = this.state
        onChange(selectedHours, selectedMinutes)
      }
    )
  }

  render() {
    const { selectedHours, selectedMinutes } = this.state
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={selectedHours}
          onValueChange={itemValue => this.handleChangeHours(itemValue)}>
          {this.getHoursItems()}
        </Picker>
        <StyledText>hours</StyledText>
        <Picker
          style={styles.picker}
          selectedValue={selectedMinutes}
          onValueChange={itemValue => this.handleChangeMinutes(itemValue)}>
          {this.getMinutesImtes()}
        </Picker>
        <StyledText>min</StyledText>
      </View>
    )
  }
}
