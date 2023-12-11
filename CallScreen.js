import React, { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import RNEncryptedStorage from 'react-native-encrypted-storage';

export default function VoiceCallPage({ route, navigation }) {
  const userId = String(Math.floor(Math.random() * 100000));

  useEffect(() => {
    // Example: Store userID securely using RNEncryptedStorage
    const storeUserID = async () => {
      try {
        RNEncryptedStorage.setItem('userID');
      } catch (error) {
        console.error('Error storing userID:', error);
      }
    };

    storeUserID();
  }, []);

  // Access the passed meeting ID from the route params
  const { meetingId } = route.params || {};
  const { username } =  route.params || {};
  return (
    <View style={styles.container}>
      
      <ZegoUIKitPrebuiltCall
        appID={528820463}
        appSign={'edcd4942fcbf49e0193f68e46a4e7f47446becb869acfcb5b96ffb6d30feb7be'}
        userID={userId}
        userName={username}
        callID={meetingId } 
        config={{
          ...GROUP_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => { navigation.navigate('CallScreen'); },
          onHangUp: () => { navigation.navigate('Home');
        Alert.alert('Notification', "Call Ended..") },
        }}
      />
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
