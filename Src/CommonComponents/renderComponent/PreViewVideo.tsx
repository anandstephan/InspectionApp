import React from 'react';
import {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const PreViewVideo = ({data}) => {
  const videoRef = useRef<VideoRef>(null);
  const [checkVideoPlayedOrNot, setCheckedVideoPlayedOrNot] = useState(false);
  const [loading, setLoading] = useState(false);

  // Ensure hooks are called unconditionally
  useEffect(() => {
    if (!checkVideoPlayedOrNot) {
      if (data.length !== 0) {
        videoRef?.current?.pause();
      }
    } else {
      videoRef?.current?.resume();
    }
  }, [checkVideoPlayedOrNot]);

  // Now the conditional return is safe after hooks have been called
  if (data.length === 0) return null;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <Pressable
          onPress={() => setCheckedVideoPlayedOrNot(!checkVideoPlayedOrNot)}>
          <Video
            source={{
              uri: data[0]?.source === undefined ? data[0] : data[0].source,
              // uri: data[0],
            }}
            style={styles.video}
            ref={videoRef}
            onBuffer={() => {
              console.log('Buffer');
              // setLoading(true);
            }}
            onReadyForDisplay={() => {
              console.log('READY');
              // setLoading(false);
            }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default PreViewVideo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  video: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
});
