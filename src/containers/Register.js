/**
 * Register.js
 *
 * Allow user to register
 */
'use strict'
/**
 * The necessary React
 */
 /**
 * The actions we need
 */
import * as authActions from '../reducers/auth/authActions'
/**
 *   LoginRender
 */
import LoginRender from '../components/LoginRender'

import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
} = require('../lib/constants').default

/**
 * ## Redux boilerplate
 */

function mapStateToProps (state) {
  return {
    auth: state.auth,
    global: state.global
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

function buttonPressHandler (signup, username, email, password) {
  signup(username, email, password)
}

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

class Register extends Component {
  render () {
    let loginButtonText = I18n.t('Register.register')
    let onButtonPress = buttonPressHandler.bind(null,
                                                this.props.actions.signup,
                                                this.props.auth.form.fields.username,
                                                this.props.auth.form.fields.email,
                                                this.props.auth.form.fields.password)

    return (
      <LoginRender
        formType={REGISTER}
        loginButtonText={loginButtonText}
        onButtonPress={onButtonPress}
        displayPasswordCheckbox
        leftMessageType={FORGOT_PASSWORD}
        rightMessageType={LOGIN}
        auth={this.props.auth}
        global={this.props.global}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)