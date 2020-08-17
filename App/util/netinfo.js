import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function useNetInfo() {
  const [state, setState] = useState(null);
  useEffect(() => {
    NetInfo.isConnected
      .fetch()
      .then()
      .done(() => {
        NetInfo.isConnected.addEventListener('connectionChange', s =>
          setState(s),
        );
      });
  });
  return [state];
}
