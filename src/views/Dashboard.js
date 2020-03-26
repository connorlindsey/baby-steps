import React, { useState, useEffect } from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import useStore from "../hooks/useStore"
import { Container } from "../styles/Layout"
import Icon from "react-native-vector-icons/Feather"
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native-gesture-handler"

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    position: "relative",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  feeding: {
    fontSize: 24,
    color: "#FDE230",
    marginHorizontal: 16,
  },
  diaper: {
    fontSize: 24,
    color: "#62A8F9",
    marginHorizontal: 16,
  },
  sleep: {
    fontSize: 24,
    color: "#D185F4",
    marginHorizontal: 16,
  },
  timer: {
    opacity: 0.8,
    position: "absolute",
    right: 16,
  },
  divider: {
    backgroundColor: "#000",
    opacity: 0.15,
    height: 1,
    marginVertical: 8,
  },
  summary: {
    textTransform: "uppercase",
    fontSize: 14,
    letterSpacing: 0.5,
    color: "#171717",
  },
  sheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    backgroundColor: "#FFF",
    minHeight: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  icon: {
    padding: 8,
  },
  babyName: {
    fontSize: 24,
    color: "#333",
  },
  babyAge: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#333",
  },
})

const Dashboard = ({ navigation }) => {
  const { state, dispatch } = useStore()
  const [baby, setBaby] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let tmp = state.babies.find(b => b.id === state.currentBaby)
    if (!tmp) {
      tmp = state.babies[0]
    }
    setBaby(tmp)
    setLoading(false)
  })

  if (loading || !baby) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    )
  }

  return (
    <View>
      {/* Baby Info */}
      <TouchableWithoutFeedback onPress={() => navigation.navigate("ListBabies")}>
        <View style={{ height: 250 }}>
          <Image
            source={{ uri: baby.image }}
            style={{ height: 250, width: "100%", position: "absolute" }}
          />
          <View style={{ position: "absolute", bottom: 8, left: 8 }}>
            <Text style={styles.babyName}>{baby.name}</Text>
            <Text style={styles.babyAge}>{baby.age}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* Actions */}
      <View style={styles.sheet}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Summary")}>
          <Text style={styles.summary}>Summary</Text>
        </TouchableWithoutFeedback>
        {/* Feeding */}
        <View style={styles.divider} />
        <View style={styles.row}>
          <TouchableWithoutFeedback
            style={styles.row2}
            onPress={() => navigation.navigate("RecordFeeding")}>
            <Icon styles={styles.icon} name='battery' size={28} color='#FDE230' />
            <Text style={styles.feeding}>Feeding</Text>
          </TouchableWithoutFeedback>
          <Icon
            style={styles.timer}
            name='clock'
            size={24}
            color='#FDE230'
            onPress={() => navigation.navigate("ListTimers", "Feeding")}
          />
        </View>
        {/* Diaper */}
        <View style={styles.divider} />
        <View style={styles.row}>
          <TouchableWithoutFeedback
            style={styles.row2}
            onPress={() => navigation.navigate("RecordFeeding")}>
            <Icon styles={styles.icon} name='cloud-rain' size={28} color='#62A8F9' />
            <Text style={styles.diaper}>Diaper</Text>
          </TouchableWithoutFeedback>
          <Icon
            style={styles.timer}
            name='clock'
            size={24}
            color='#62A8F9'
            onPress={() => navigation.navigate("ListTimers", "Diaper")}
          />
        </View>
        {/* Sleep */}
        <View style={styles.divider} />
        <View style={styles.row}>
          <TouchableWithoutFeedback
            style={styles.row2}
            onPress={() => navigation.navigate("RecordFeeding")}>
            <Icon styles={styles.icon} name='moon' size={28} color='#D185F4' />
            <Text style={styles.sleep}>Sleep</Text>
          </TouchableWithoutFeedback>
          <Icon
            style={styles.timer}
            name='clock'
            size={24}
            color='#D185F4'
            onPress={() => navigation.navigate("ListTimers", "Sleep")}
          />
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  )
}

export default Dashboard
