import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;

const baseWidth = 375;

export const scaleSize = (size) => (width / baseWidth) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export function boxShadow(
  color,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
