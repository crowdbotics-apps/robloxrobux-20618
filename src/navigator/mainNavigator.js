import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList107925Navigator from '../features/ArticleList107925/navigator';
import ArticleList107924Navigator from '../features/ArticleList107924/navigator';
import ArticleList107923Navigator from '../features/ArticleList107923/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList107925: { screen: ArticleList107925Navigator },
ArticleList107924: { screen: ArticleList107924Navigator },
ArticleList107923: { screen: ArticleList107923Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
