import React, {useContext} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as scenes from '../../../scenes';
import * as screenName from '../../../Constants/ScreenName';
import {Typography} from '../../../styles';
import {ThemeContext} from '../../../Provider/Theme';
import {LessonProvider} from '../../../Provider/LessonCourse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const LessonCourseStack = createStackNavigator();
const LessonCourseNavigatorStack = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  return (
    <LessonProvider>
      <LessonCourseStack.Navigator
        headerMode="screen"
        mode="modal"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.themeColor,
          },
          headerTintColor: theme.primaryTextColor,
          headerTitleStyle: {
            ...Typography.fontBold,
            fontSize: Typography.fontSize20,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialIcons name="close" size={35} color={theme.primaryColor} />
          ),
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerStatusBarHeight:
            navigation.dangerouslyGetState().routes.indexOf(route) > 0
              ? 10
              : undefined,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        initialRouteName={screenName.LessonCourseScreenStack}>
        <LessonCourseStack.Screen
          name={screenName.LessonCourseScreenName}
          component={scenes.LessonCourse}
          options={{headerShown: false}}
          initialParams={{id: 1}}
          onDismiss={() => {
            console.log('dismisssssss');
          }}
        />
        <LessonCourseStack.Screen
          name={screenName.AuthorDetailScreenName}
          component={scenes.AuthorDetail}
          options={{title: 'Author'}}
        />
        <LessonCourseStack.Screen
          name={screenName.ForumQuestion}
          component={scenes.ForumQuestion}
          initialParams={{itemQuestion: 1}}
          options={{
            title: 'Q&A',
          }}
        />
      </LessonCourseStack.Navigator>
    </LessonProvider>
  );
};
export default LessonCourseNavigatorStack;
