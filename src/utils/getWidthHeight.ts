import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPW = (percentageWidth: number) => {
  return (percentageWidth / 100) * screenWidth;
};

const RPH = (percentageHeight: number) => {
  return (percentageHeight / 100) * screenHeight;
};

export {RPW, RPH};
