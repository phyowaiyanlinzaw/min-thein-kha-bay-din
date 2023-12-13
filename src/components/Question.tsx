import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Question = {
  questionNo: number;
  questionName: string;
};

const Question: FC<{question: Question; onPress: () => void}> = ({
  question,
  onPress,
}) => {
  return (
    <TouchableOpacity key={question.questionNo} onPress={onPress}>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          margin: 10,
          color: '#fff',
          borderWidth: 1,
          borderColor: '#64748b',
          padding: 10,
          borderRadius: 10,
        }}>
        {question.questionName}
      </Text>
    </TouchableOpacity>
  );
};

export default Question;
