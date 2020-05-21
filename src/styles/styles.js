import {
  blackWithOpacity,
  BLACK,
  backgroundItem,
  backgroundColor,
} from './color';
import {scaleSize} from './size';
export const titleInList = {
  color: BLACK,
  fontWeight: '600',
  fontSize: 18,
};
export const item = {
  margin: 10,
  width: 200,
  height: 180,
  backgroundColor: backgroundItem,
  shadowColor: BLACK,
  shadowOffset: {width: 5, height: 5},
  shadowOpacity: 0.4,
  borderRadius: 5,
  borderWidth: 0.25,
  borderColor: blackWithOpacity,
};
export const logoView = {
  width: scaleSize(150),
  height: scaleSize(150),
  resizeMode: 'contain',
};
export const backgroundReset = {
  backgroundColor: backgroundColor,
};
export const center = {
  alignItems: 'center',
  justifyContent: 'center',
};
export const columnCenter = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
export const rowCenter = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
export const crossCenter = {
  alignItems: 'center',
};
export const width100 = {
  width: '100%',
};
export const mainStart = {
  justifyContent: 'flex-start',
};

// export default styles;
