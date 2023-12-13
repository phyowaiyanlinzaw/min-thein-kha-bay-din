import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigator/type';
import {FC, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import data from '../constants/data.json';

type ResultScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ResultScreen'
>;

const ResultScreen: FC<ResultScreenProps> = ({navigation, route}) => {
  const [result, setResult] = useState<string>('');
  const {answers} = data;
  const {questionNo, answerNo} = route.params;

  useEffect(() => {
    answers.map(answer => {
      if (answer.questionNo === questionNo && answer.answerNo === answerNo) {
        setResult(answer.answerResult);
      }
    });
  }, [questionNo, answerNo]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#172554',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
          paddingHorizontal: 5,
          textAlign: 'center',
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 50,
          paddingVertical: 30,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={{
            backgroundColor: '#64748b',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Go Home</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.canGoBack() && navigation.goBack();
          }}
          style={{
            backgroundColor: '#64748b',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff'}}>Go Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultScreen;
