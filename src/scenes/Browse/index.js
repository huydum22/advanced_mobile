import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {
  PopularSkill,
  RelateSkill,
  Path,
  TopAuthor,
} from '../../components/Main/Browse';
import {Size, Colors, Styles, Typography, BoxModel} from '../../styles';
import backgroundImage from '../../assets/image/backgroundImage.jpg';
import backgroundImage02 from '../../assets/image/backgroundImage02.jpg';

const brown = (props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.imageBackground}
          source={backgroundImage}>
          <TouchableOpacity style={styles.blurBackground}>
            <View style={Styles.breakContentText}>
              <Text style={styles.text}>new release</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageBackground}
          source={backgroundImage02}>
          <TouchableOpacity style={styles.blurBackground}>
            <View style={Styles.breakContentText}>
              <Text style={styles.text}>recommended for you</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <PopularSkill />
        <RelateSkill />
        <Path title="Path" />
        <TopAuthor />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.backgroundColor},
  imageBackground: {
    ...Styles.center,
    ...BoxModel.margin,
    height: Size.bannerHeight,
  },
  blurBackground: {
    ...Styles.center,
    backgroundColor: Colors.blackWith05OpacityColor,
    height: Size.bannerHeight,
    width: Size.WIDTH - 40,
  },
  text: {
    ...Typography.fontBold,
    ...Styles.textInBanner,
    color: Colors.whiteColor,
    fontSize: Typography.fontSize30,
  },
});
export default brown;
