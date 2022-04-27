import * as React from 'react';
import { useState } from 'react';
import { useRef } from "react";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet,Button, Text, View, Dimensions } from 'react-native';
import MapNew from './screen/MapNew';

import RootStack from './Navigation/RootStack';

export default function App() {
  return (
   <RootStack/>
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
// import * as React from 'react';
// import Constants from 'expo-constants';
// import { WebView } from 'react-native-webview';
// import { StyleSheet } from 'react-native';
// export default function App() {
//   return (
//     <WebView 
//     style={styles.container}
//     source={{ uri: 'https://www.udemy.com/topic/react-native/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_87321136028_._ad_535255896929_._kw_%2Breact%20%2Bnative%20%2Budemy_._de_c_._dm__._pl__._ti_kwd-445834071742_._li_9069818_._pd__._&matchtype=b&gclid=Cj0KCQiA09eQBhCxARIsAAYRiykmdZ4GAbugLVbmVolj2iTYE_x_DTYLP6JvKwzPRyvKhg380vknliIaAscaEALw_wcB' }}
//   />
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
// });
