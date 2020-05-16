import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import mainStyle from '../../../../config/styles';
import colors from '../../../../config/color';
const PopularSkill = (props) => {
  const data = [
    {
      id: '1',
      name: 'Angular',
    },
    {
      id: '2',
      name: 'javascript',
    },
    {
      id: '3',
      name: 'C#',
    },
    {
      id: '4',
      name: 'Java',
    },
    {
      id: '5',
      name: 'Data analyst',
    },
    {
      id: '6',
      name: 'ASP.NET',
    },
    {
      id: '7',
      name: 'Node js',
    },
    {
      id: '8',
      name: 'Design Patterns',
    },
    {
      id: '9',
      name: 'Python',
    },
    {
      id: '10',
      name: 'React',
    },
    {
      id: '11',
      name: 'Ios',
    },
    {
      id: '12',
      name: 'Android ',
    },
    {
      id: '13',
      name: 'Machine Learning',
    },
  ];
  const renderList = (listData) => {
    return listData.map((item) => (
      <TouchableOpacity key={item.id} style={styles.skillContainer}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={mainStyle.titleInList}>Popular skills</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderList(data)}
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    height: 25,
    marginLeft: 15,
  },
  skillContainer: {
    backgroundColor: colors.backgroundButtonColor,
    borderRadius: 15,
    marginLeft: 10,
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    width: 15,
  },
});

export default PopularSkill;
