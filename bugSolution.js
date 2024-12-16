// bug.js (Incorrect import)
import React from 'react';
import MapView from 'react-native-maps'; //Incorrect import. Should be react-native-maps

const MyComponent = () => (
  <View>
    <MapView style={{flex:1}} />
  </View>
);

export default MyComponent;

// bugSolution.js (Correct import)
import React from 'react';
import MapView from 'react-native-maps';

const MyComponent = () => (
  <View>
    <MapView style={{flex:1}} />
  </View>
);

export default MyComponent; 
// Ensure you've installed react-native-maps: expo install react-native-maps