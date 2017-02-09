import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput
} from 'react-native';

import Config from 'react-native-config';
import Theme from 'config/theme';
import ActionButton from 'components/common/action-button';
import styles from './styles';

const editImage = require('assets/edit.png');

function saveArea(params, token) {
  const url = `${Config.API_URL}/area`;
  const fetchConfig = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(params)
  };
  return fetch(url, fetchConfig)
    .then(res => {
      if (res.ok) return res.json();
      throw res;
    });
}

class SetupOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.area.wdpaName || ''
    };
  }

  onNextPress = async () => {
    try {
      const params = {
        name: this.state.name,
        area: this.props.area,
        userid: this.props.user.id
      };
      const area = await saveArea(params, this.props.user.token);
      // TODO: save area: image in reducer
      this.props.onNextPress();
    } catch (err) {
      console.warn(err, 'TODO: handle error');
    }
  }

  textChange = (name) => {
    this.setState({ name });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selector}>
          <Text style={styles.selectorLabel}>Name the area</Text>
          <Image style={styles.image} source={{ uri: this.props.snapshot }} />
          <View style={styles.searchContainer}>
            <TextInput
              ref={(ref) => { this.input = ref; }}
              autoFocus={false}
              autoCorrect={false}
              autoCapitalize="none"
              value={this.state.name}
              placeholder="Enter a name"
              style={styles.searchInput}
              onChangeText={this.textChange}
              underlineColorAndroid="transparent"
              selectionColor={Theme.colors.color1}
              placeholderTextColor={Theme.fontColors.light}
            />
            <Image
              style={Theme.icon}
              source={editImage}
              onPress={() => this.input.focus()}
            />
          </View>
        </View>

        <ActionButton style={styles.buttonPos} disabled={!this.state.name} onPress={this.onNextPress} text="FINISH" />
      </View>
    );
  }
}

SetupOverview.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    token: React.PropTypes.string.isRequired
  }).isRequired,
  area: React.PropTypes.object.isRequired,
  snapshot: React.PropTypes.string.isRequired,
  onNextPress: React.PropTypes.func.isRequired
};

export default SetupOverview;