import React, { useState } from 'react';
// import { Slider } from 'react-native-slider';
import { StatusBar, StyleSheet, Slider, Button, Image, Text, TextInput, View, ScrollView, Picker } from 'react-native';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  const [reactValue, setReactValue] = useState(0);
  const [vueValue, setVueValue] = useState(0);
  const [angularValue, setAngularValue] = useState(0);
  // getInitialState() {
  //   return {
  //     value: 0.2,
  //   };
  // }
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={[styles.section, styles.red]}>
          <Image style={[styles.bungie]} source={require("./assets/Bungie.png")} />
          <Text style={styles.centerText}>Employee Application</Text>
        </View>
        <View style={[styles.section, styles.blue]}>
          {/* Name, Street Address, City, State, Zip Code, also add a Picker for Gender */}
          <Text style={styles.centerText}>Personal Info</Text>
          <Text>Name</Text>
          <TextInput style={styles.inputArea} placeholder="Name" />
          <Text>Street Address</Text>
          <TextInput style={styles.inputArea} placeholder="Street" />
          <Text>City</Text>
          <TextInput style={styles.inputArea} placeholder="City" />
          <Text>State</Text>
          <TextInput style={styles.inputArea} placeholder="State" />
          <Text>Zip Code</Text>
          <TextInput style={styles.inputArea} placeholder="Zip Code" />
          <Text>Gender</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="N/A" value="N/A" />
          </Picker>
        </View>
        <View style={[styles.section, styles.yellow]}>
          <Text style={styles.centerText}>Skills</Text>
          <Text>ReactJS Skill: {reactValue}</Text>
          <Slider
            style={styles.inputArea}
            value={reactValue}
            maximumValue={10}
            onValueChange={(thisValue) => setReactValue(thisValue)} />
          <Text>VueJS Skill: {vueValue}</Text>
          <Slider
            style={styles.inputArea}
            value={vueValue}
            maximumValue={10}
            onValueChange={(thisValue) => setVueValue(thisValue)} />
          <Text>Angular Skill: {angularValue}</Text>
          <Slider
            style={styles.inputArea}
            value={angularValue}
            maximumValue={10}
            onValueChange={(thisValue) => setAngularValue(thisValue)} />
        </View>
        <View style={[styles.section, styles.green]}>
          <Text style={styles.centerText}>Submission</Text>
          <Button title="Submit" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 5
  },
  bungie: {
    width: 100,
    height: 30,
    resizeMode: "stretch"
  },
  centerText: {
    textAlign: 'center',
    fontSize: 25
  },
  section: {
    margin: 15,
    padding: 30,
    backgroundColor: '#4287f5',
    borderRadius: 10
  },
  red: {
    backgroundColor: "#ff523b"
  },
  blue: {
    backgroundColor: "#5cbeff"
  },
  yellow: {
    backgroundColor: "yellow"
  },
  green: {
    backgroundColor: "#19ed15"
  },
});
