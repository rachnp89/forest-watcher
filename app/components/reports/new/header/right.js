import React from 'react';
import {
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
import I18n from 'locales';
import Theme from 'config/theme';

import CONSTANTS from 'config/constants';

const saveReportIconWhite = require('assets/save_for_later_white.png');
const saveReportIcon = require('assets/save_for_later.png');

function RightBtn(props) {
  function onSavePress() {
    Alert.alert(
      I18n.t('report.saveLaterTitle'),
      I18n.t('report.saveLaterDescription'),
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            const { state } = props.navigation;
            const form = state && state.params && state.params.form;
            props.saveReport(form, {
              status: CONSTANTS.status.draft
            });
            props.navigation.goBack();
          }
        }
      ],
      { cancelable: false }
    );
  }
  return (
    <TouchableHighlight
      onPress={onSavePress}
      underlayColor="transparent"
      activeOpacity={0.8}
    >
      <Image style={Theme.icon} source={props.light ? saveReportIconWhite : saveReportIcon} />
    </TouchableHighlight>
  );
}

RightBtn.propTypes = {
  light: React.PropTypes.bool,
  saveReport: React.PropTypes.func.isRequired
};

export default withNavigation(RightBtn);
