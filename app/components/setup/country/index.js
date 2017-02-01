import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import SearchSelector from 'components/common/search-selector';
import Theme from 'config/theme';
import styles from './styles';

function renderLoading() {
  return (
    <View style={[styles.container, styles.center]}>
      <ActivityIndicator
        style={{ height: 80 }}
        size={'large'}
      />
    </View>
  );
}

class SetupCountry extends Component {
  componentDidMount() {
    this.props.showNavHeader(false);
    if (!this.props.user) {
      this.props.getUser();
    }
    if (!this.props.countries) {
      this.props.getCountries();
    }
  }

  onNext() {
    this.props.showNavHeader(true);
    this.props.navigateBack();
  }

  render() {
    return (
      this.props.user && this.props.countries
      ?
        <View style={styles.container}>
          <Text style={styles.title}>Set up</Text>
          <View style={styles.content}>
            <Text style={styles.text}>Hi {this.props.user.fullName},</Text>
            <Text style={styles.text}>please set up an area</Text>
          </View>

          <View style={styles.selector}>
            <Text style={styles.selectorLabel}>First, select your country of interest</Text>
            <SearchSelector
              data={this.props.countries}
              placeholder={'Search for a country'}
            />
          </View>

          <TouchableHighlight
            style={styles.button}
            onPress={() => this.onNext()}
            activeOpacity={0.8}
            underlayColor={Theme.background.secondary}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableHighlight>
        </View>
      :
        renderLoading()
    );
  }
}

SetupCountry.propTypes = {
  user: React.PropTypes.any,
  countries: React.PropTypes.any,
  getUser: React.PropTypes.func.isRequired,
  getCountries: React.PropTypes.func.isRequired,
  showNavHeader: React.PropTypes.func.isRequired,
  navigateBack: React.PropTypes.func.isRequired
};

export default SetupCountry;