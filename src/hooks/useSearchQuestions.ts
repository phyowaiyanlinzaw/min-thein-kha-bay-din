import {ChangeEvent, useEffect, useState} from 'react';
import data from '../constants/data.json';

type Question = {
  questionNo: number;
  questionName: string;
};

const useSearchQuestions = () => {
  const [search, setSearch] = useState<string>('');
  const {questions} = data;

  const searchQuestions = (questionsParam: Question[]) => {
    return questionsParam.filter((question: Question) => {
      return question.questionName.toLowerCase().includes(search.toLowerCase());
    });
  };

  const handleInputChange = (text: string) => {
    setSearch(text);
  };

  useEffect(() => {
    const searchDebouncing = setTimeout(() => {
      searchQuestions(questions);
    }, 2000);
    return () => clearTimeout(searchDebouncing);
  }, [search]);

  return {search, searchQuestions, handleInputChange};
};

export default useSearchQuestions;
