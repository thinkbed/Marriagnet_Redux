'use strict'

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text } from 'react-native'

import {Router, Scene} from 'react-native-router-flux'

import {Provider} from 'react-redux'

/**
 * ### configureStore
 *
 *  ```configureStore``` will connect the ```reducers```, the
 *
 */
import configureStore from './lib/configureStore'

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')

// Support fallbacks so en-US & en-BR both use en
I18n.fallbacks = true

import Translations from './lib/Translations'
I18n.translations = Translations

/**
 * ### containers
 *
 * All the top level containers
 *
 */
import App from './containers/App'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Register from './containers/Register'
import ForgotPassword from './containers/ForgotPassword'
import Profile from './containers/Profile'
import Main from './containers/Main'
//import Subview from './containers/Subview'

/**
 * ## States
 * Snowflake explicitly defines initial state
 *
 */
import AuthInitialState from './reducers/auth/authInitialState'
//import DeviceInitialState from './reducers/device/deviceInitialState'
import GlobalInitialState from './reducers/global/globalInitialState'
//import ProfileInitialState from './reducers/profile/profileInitialState'

import Icon from 'react-native-vector-icons/FontAwesome'

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState () {
  const _initState = {
    auth: new AuthInitialState(),
    // device: (new DeviceInitialState()).set('isMobile', true),
    global: (new GlobalInitialState())
    //profile: new ProfileInitialState()
  }
  return _initState
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70
    }
})

class TabIcon extends React.Component {
  render () {
    var color = this.props.selected ? '#FF3366' : '#FFB3B3'
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName} size={30} />
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
     )
  }
}

export default class Marriagnet extends Component{
    render() {
        
        const store = configureStore(getInitialState())

        return (
            <Provider store={store}>
                <Router sceneStyle={{backgroundColor: 'white'}}>
                    <Scene key='root' hideNavBar>
                        <Scene key='Logout'
                         component={Logout}
                         type='replace'
                         initial/>

                        <Scene key='InitialLoginForm'
                          component={Register}
                          type='replace' />

                        <Scene key='Login'
                          component={Login}
                          type='replace' />

                        <Scene key='Register'
                          component={Register}
                          type='replace' />

                        <Scene key='ForgotPassword'
                          component={ForgotPassword}
                          type='replace' />

                        <Scene key='Tabbar'
                        tabs
                        hideNavBar
                        tabBarStyle={styles.tabBar}
                        default='Main'
                        >
                            <Scene key='Main'
                             title={'Main'}
                             iconName={'home'}
                             icon={TabIcon}
                             hideNavBar
                             component={Main}
                             initial/>
                            <Scene key='Profile'
                             title={'Profile'}
                             icon={TabIcon}
                             iconName={'gear'}
                             hideNavBar
                             component={Profile}/>
                            <Scene key='Logout'
                             title={'Logout'}
                             icon={TabIcon}
                             iconName={'gear'}
                             hideNavBar
                             component={Logout}/>
                        </Scene>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
