import StageButton from '../components/stageButton';
import { StyleSheet, Text, View } from 'react-native';

const BanListScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Thrust Gaming matenmeee</Text>
        <StageButton imagePath={require("../assets/stagesImage/battlefield.png")}/>
        <StageButton imagePath={require("../assets/stagesImage/finalDestination.png")}/>
        <StageButton imagePath={require("../assets/stagesImage/hollowBastion.png")}/>
        <StageButton imagePath={require("../assets/stagesImage/kalos.png")}/>
        <StageButton imagePath={require("../assets/stagesImage/pokemonStadium.png")}/>
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

export default BanListScreen;
  