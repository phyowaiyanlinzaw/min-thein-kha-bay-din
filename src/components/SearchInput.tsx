import {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import {RPH, RPW} from '../utils/getWidthHeight';

const SearchInput: FC<{
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}> = ({placeholder, onChangeText, value}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RPH(3),
      }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#64748b',
          padding: 10,
          borderRadius: 10,
          width: RPW(90),
          marginBottom: 10,
          backgroundColor: '#172554',
          color: '#fff',
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={'#64748b'}
      />
    </View>
  );
};

export default SearchInput;
