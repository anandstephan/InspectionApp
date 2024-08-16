import Input from './Input';
import File from './File';
import List from './List';
import TextArea from './TextArea';
import Video from './CustomVideo';
import MultiList from './MultList';

const Output = ({data, setParticularObj}) => {
  switch (data.type) {
    case 'text':
      return (
        <Input
          metaData={data}
          setParticularObj={setParticularObj}
          editable={true}
        />
      );
    case 'file':
      return <File metaData={data} setParticularObj={setParticularObj} />;
    case 'dropdown':
      return <List metaData={data} setParticularObj={setParticularObj} />;
    case 'textarea':
      return <TextArea metaData={data} setParticularObj={setParticularObj} />;
    case 'date':
      return (
        <Input
          metaData={data}
          setParticularObj={setParticularObj}
          editable={false}
        />
      );
    case 'multipleselect':
      return <MultiList metaData={data} setParticularObj={setParticularObj} />;
    case 'video':
      return <Video metaData={data} setParticularObj={setParticularObj} />;
    default:
      return null;
  }
};

export default Output;
