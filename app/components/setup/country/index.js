import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import SearchSelector from 'components/common/search-selector';
import styles from './styles';
import NextButton from '../next-button';

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

function getCurrentCountry(countries, iso) {
  for (let i = 0, length = countries.length; i < length; i++) {
    if (countries[i].iso === iso) {
      return {
        label: countries[i].name,
        id: iso
      };
    }
  }
  return { label: '', id: iso };
}

class SetupCountry extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser();
    }
    if (!this.props.countries) {
      this.props.getCountries();
    }
  }

  render() {
    const { user, countries, setupCountry } = this.props;
    if (user && countries && countries.length) {
      const iso = setupCountry.iso || user.country;
      const current = getCurrentCountry(countries, iso);
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>Hi {user.fullName},</Text>
            <Text style={styles.text}>please set up an area</Text>
          </View>

          <View style={styles.selector}>
            <Text style={styles.selectorLabel}>First, select your country of interest</Text>
            <SearchSelector
              selected={current}
              onOptionSelected={(country) => { this.props.setSetupCountry(country); }}
              data={countries}
              placeholder={'Search for a country'}
            />
          </View>

          <NextButton onPress={this.props.onNextClick} text="NEXT" />
        </View>
      );
    }
    return renderLoading();
  }
}

SetupCountry.propTypes = {
  user: React.PropTypes.any,
  setupCountry: React.PropTypes.any,
  countries: React.PropTypes.any,
  getUser: React.PropTypes.func.isRequired,
  getCountries: React.PropTypes.func.isRequired,
  setSetupCountry: React.PropTypes.func.isRequired,
  onNextClick: React.PropTypes.func.isRequired
};

export default SetupCountry;
