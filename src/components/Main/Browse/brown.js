import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PopularSkill from './PopularSkill/popular-skill';
import RelateSkill from './RelateSkill/relate-skill';
import Path from './Path/path';
import TopAuthor from './TopAuthors/top-authors';
import colors from '../../../styles/color';
import size from '../../../styles/size';
import backgroundImage from '../../../../assets/backgroundImage.jpg';
import backgroundImage02 from '../../../../assets/backgroundImage02.jpg';

const brown = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <TouchableOpacity style={styles.blurBackground}>
          <Text style={styles.text}>
            new
            {'\n'}
            release
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground
        style={styles.imageBackground}
        source={backgroundImage02}>
        <TouchableOpacity style={styles.blurBackground}>
          <Text style={styles.text}>
            recommended
            {'\n'}
            for you
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <PopularSkill />
      <RelateSkill />
      <Path title="Path" />
      <TopAuthor />
      <View style={styles.footer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.backgroundColor},
  imageBackground: {
    marginHorizontal: 20,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  blurBackground: {
    backgroundColor: colors.alphaBackgroundImageColor,
    height: 100,
    width: size.WIDTH - 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.whiteColor,
    fontSize: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footer: {height: 40},
});
export default brown;
