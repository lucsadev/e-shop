import { Dimensions } from 'react-native';

export * from './Colors';


export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const isTablet = deviceWidth >= 768 && deviceHeight >= 1024;
