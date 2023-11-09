import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StageButton from './components/stageButton';
import {} from './'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Thrust Gaming matenmeee</Text>
      <StageButton imagePath={require("./assets/stagesImage/battlefield.png")}/>
      <StageButton imagePath={require("./assets/stagesImage/finalDestination.png")}/>
      <StageButton imagePath={require("./assets/stagesImage/hollowBastion.png")}/>
      <StageButton imagePath={require("./assets/stagesImage/kalos.png")}/>
      <StageButton imagePath={require("./assets/stagesImage/pokemonStadium.png")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
