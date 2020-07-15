import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, Typography} from '../../../../styles';
import {instructorDetailAPI} from '../../../../services/Instructor';
import {ThemeContext} from '../../../../Provider/Theme';
import FastImage from 'react-native-fast-image';
const Author = (props) => {
  const {onPress} = props;
  const {theme} = useContext(ThemeContext);
  const [item, setItem] = useState({});
  const fetchData = async () => {
    try {
      let response = await instructorDetailAPI(props.instructor);
      setItem(response.data.payload);
    } catch ({response}) {
      console.log(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.skillContainer,
            {backgroundColor: theme.backgroundSeeAllButton},
          ]}
          onPress={onPress}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.avatar,
            }}
          />
          <Text style={[styles.text, {color: theme.primaryTextColor}]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  skillContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    marginLeft: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  text: {
    marginLeft: 10,
    ...Typography.fontRegular,
  },
});

export default Author;
