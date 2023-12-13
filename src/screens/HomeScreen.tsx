import {FlatList, Pressable, Text, View} from 'react-native';
import SearchInput from '../components/SearchInput.tsx';
import data from '../constants/data.json';
import Question from '../components/Question.tsx';

import {RPW, RPH} from '../utils/getWidthHeight.ts';
import useSearchQuestions from '../hooks/useSearchQuestions.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootStackParamsList} from '../navigator/type.ts';
type HomeNavProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const HomeScreen: FC<HomeNavProps> = ({navigation}) => {
  const {questions} = data;
  const {search, handleInputChange, searchQuestions} = useSearchQuestions();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: RPW(100),
        height: RPH(100),
        backgroundColor: '#172554',
        paddingTop: 30,
      }}>
      <FlatList
        ListHeaderComponent={
          <SearchInput
            placeholder="မေးခွန်း တစ်ခုခုကို ရှာဖွေပါ"
            onChangeText={handleInputChange}
            value={search}
          />
        }
        stickyHeaderIndices={[0]}
        keyExtractor={(item, index) => index.toString()}
        data={searchQuestions(questions)}
        renderItem={({item}) => {
          return (
            <View>
              <Question
                question={item}
                onPress={() =>
                  navigation.navigate('NumberScreen', {
                    questionNo: item.questionNo,
                    questionName: item.questionName,
                  })
                }
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
