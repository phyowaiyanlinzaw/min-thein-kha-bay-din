import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigator/type';
import {FC} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import data from '../constants/data.json';
import Square from '../components/Square';
import {RPH, RPW} from '../utils/getWidthHeight';

type NumberScreenNavProps = NativeStackScreenProps<
  RootStackParamsList,
  'NumberScreen'
>;

const NumberScreen: FC<NumberScreenNavProps> = ({navigation, route}) => {
  const {numberList} = data;
  return (
    <View
      style={{
        backgroundColor: '#172554',
        height: RPH(100),
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: RPH(5),
          textAlign: 'center',
        }}>
        {`❝ ${route.params.questionName} ❞`}
      </Text>
      <FlatList
        numColumns={9}
        keyExtractor={(item, index) => index.toString()}
        data={numberList}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.canGoBack() && navigation.goBack();
                }}
                style={{
                  backgroundColor: '#64748b',
                  padding: 10,
                  borderRadius: 10,
                  width: RPW(30),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Go Back
                </Text>
              </Pressable>
            </View>
          );
        }}
        renderItem={({item}) => {
          return (
            <Square
              number={item}
              onClick={() => {
                navigation.navigate('ResultScreen', {
                  questionNo: route.params.questionNo,
                  answerNo: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default NumberScreen;
