import {
  blackWithOpacity,
  BLACK,
  whiteColor,
  backgroundColor,
  blackWith08OpacityColor,
  blackColor,
  grayDarkColor,
} from './color';
import {smallMargin, tinyMargin, smallPaddingHorizontal} from './box-model';
import {scaleSize, boxShadow, bannerHeight} from './size';
import {
  fontSize18,
  fontBold,
  fontRegular,
  fontSize14,
  fontSize12,
} from './typography';
import {spacing_14} from './distance';
export const titleInList = {
  color: BLACK,
  fontWeight: '600',
  fontSize: 18,
};
export const titleRow = {
  color: blackColor,
  fontSize: fontSize18,
};
export const titleInHorizontalList = {
  flex: 1,
  ...fontBold,
  fontSize: fontSize14,
};
export const subTitleInHorizontalList = {
  flex: 1,
  ...fontRegular,
  fontSize: fontSize12,
  color: grayDarkColor,
};

export const horizontalCourse = {
  ...smallMargin,
  width: scaleSize(200),
  height: scaleSize(180),
  backgroundColor: whiteColor,
  borderWidth: 0.25,
  ...boxShadow(blackWith08OpacityColor, {width: 5, height: 5}, 8, 0.2),
  borderColor: blackWithOpacity,
};
export const imageInHorizontalCourse = {
  flex: 1,
  width: scaleSize(200),
  resizeMode: 'cover',
};
export const containerInHorizontalCourse = {
  ...tinyMargin,
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

export const horizontalAuthor = {
  ...crossCenter,
  height: scaleSize(160),
  width: scaleSize(100),
  marginLeft: spacing_14,
};
export const imageInHorizontalAuthor = {
  width: bannerHeight,
  height: bannerHeight,
  borderRadius: scaleSize(50),
};
export const containerInHorizontalAuthor = {
  ...center,
  ...smallPaddingHorizontal,
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
export const rowCross = {
  alignItems: 'center',
  flexDirection: 'row',
};
export const crossCenter = {
  alignItems: 'center',
};
export const width100 = {
  width: '100%',
};
export const height100 = {
  height: '100%',
};
export const mainStart = {
  justifyContent: 'flex-start',
};

export const fillRow = {
  flex: 1,
  flexDirection: 'row',
};

export const fillRowStart = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
};

export const fillColumn = {
  flex: 1,
  flexDirection: 'column',
};
export const rowBetween = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const breakContentText = {
  flexDirection: 'row',
};
export const textInBanner = {
  textAlign: 'center',
  textTransform: 'uppercase',
  flexWrap: 'wrap',
};
export const textCenter = {
  textAlign: 'center',
};
export const mainCenter = {
  justifyContent: 'center',
};
