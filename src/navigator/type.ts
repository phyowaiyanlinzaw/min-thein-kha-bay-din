export type RootStackParamsList = {
  HomeScreen: undefined;
  NumberScreen: {
    questionNo: number;
    questionName: string;
  };
  ResultScreen: {
    questionNo: number;
    answerNo: string;
  };
};
