import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Square: FC<{number: string; onClick: () => void}> = ({
  number,
  onClick,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}>
      <Text>{number}</Text>
    </TouchableOpacity>
  );
};

export default Square;
