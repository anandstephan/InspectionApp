import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Output from './renderComponent/Output';

const VerticalScroll = ({data, setParticularObj}) => {
  return data === null ? (
    <ActivityIndicator size={'large'} />
  ) : (
    <View>
      {data.subfeilds.map((item, idx) => (
        <Output data={item} setParticularObj={setParticularObj} />
      ))}
    </View>
  );
};

export default VerticalScroll;
