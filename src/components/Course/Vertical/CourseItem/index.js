import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {FavoriteContext} from '../../../../Provider/Favorite';
import {Colors, Size, Styles, Distance} from '../../../../styles';
import {Rating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import p from 'pretty-format';
const Item = (props) => {
  const {onPressItem, item} = props;
  const {favorite, setFavorite} = useContext(FavoriteContext);
  const onPressMore = (itemShow) => {
    this.ActionSheet.context = itemShow;
    this.ActionSheet.show();
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.main}
        onPress={() => {
          onPressItem(item);
        }}
        underlayColor={Colors.whiteColor}>
        <View style={styles.main}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.mainContainer}>
            <Text style={Styles.titleInHorizontalList}>{item.name}</Text>
            <Text style={Styles.subTitleInHorizontalList}>{item.author}</Text>
            <View style={styles.levelContainer}>
              <Text style={Styles.subTitleInHorizontalList}>{item.level}</Text>
              <Text
                style={[Styles.subTitleInHorizontalList, Styles.textCenter]}>
                {item.timeToStart}
              </Text>
              <Text
                style={[Styles.subTitleInHorizontalList, Styles.textCenter]}>
                {item.totalHour}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Rating
                readonly={true}
                imageSize={14}
                startingValue={item.rate}
                ratingCount={5}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            onPressMore(item);
          }}>
          <Ionicons name="ios-more" size={25} />
        </TouchableOpacity>
        <ActionSheet
          ref={(o) => (this.ActionSheet = o)}
          options={['Bookmark', 'Add to channel', 'Download', 'cancel']}
          cancelButtonIndex={3}
          onPress={(index) => {
            if (index === 2) {
              setFavorite((favorite) => [
                ...favorite,
                this.ActionSheet.context,
              ]);
            }
            /* do something */
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Styles.fillRow,
    backgroundColor: Colors.whiteColor,
  },
  main: {
    flex: 9,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    ...Styles.center,
    height: Size.scaleSize(100),
    width: Size.scaleSize(50),
    marginLeft: Distance.spacing_8,
  },
  image: {
    resizeMode: 'cover',
    width: Size.scaleSize(80),
    height: Size.scaleSize(60),
  },

  mainContainer: {
    ...Styles.fillColumnStart,
    flex: 8,
    marginVertical: 10,
    marginLeft: 5,
  },
  subContainer: {
    flex: 1,
    ...Styles.center,
  },
  levelContainer: {
    ...Styles.fillRowBetween,
    marginTop: 5,
  },
  ratingContainer: {
    flex: 1.5,
    ...Styles.fillRowStart,
    marginTop: 10,
  },
  more: {
    ...Styles.fillCenter,
    marginRight: 5,
  },
});
export default Item;
