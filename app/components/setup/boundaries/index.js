import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import MapModal from 'components/common/map-modal';
import ProtectedAreas from 'components/setup/protected-areas';
import DrawAreas from 'components/setup/draw-areas';
import Theme from 'config/theme';
import I18n from 'locales';
import styles from './styles';

class SetupBoundaries extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

  constructor() {
    super();
    this.state = {
      showProtectedAreas: false,
      showDrawAreas: false
    };
  }

  onAreaSelected = (area) => {
    this.props.setSetupArea(area);
    this.setDrawAreasStatus(false);
    this.props.onNextPress();
  }

  onDrawAreaFinish = (area) => {
    this.props.setSetupArea(area);
    this.setDrawAreasStatus(false);
    this.props.onNextPress();
  }

  setProtectedAreasStatus(status) {
    this.setState({ showProtectedAreas: status });
  }
  setDrawAreasStatus(status) {
    this.setState({ showDrawAreas: status });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selector}>
          <Text style={styles.selectorLabel}>Now, choose the boundaries</Text>

          <View style={styles.actions}>
            <TouchableHighlight
              style={styles.section}
              onPress={() => this.setProtectedAreasStatus(true)}
              activeOpacity={0.8}
              underlayColor={Theme.background.white}
            >
              <View style={styles.sectionTextContainer}>
                <Image
                  style={styles.iconProtected}
                  source={require('assets/select_pa.png')}
                />
                <Text
                  style={styles.sectionText}
                  numberOfLines={2}
                >
                  Select a protected area
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.section}
              onPress={() => this.setDrawAreasStatus(true)}
              activeOpacity={0.8}
              underlayColor={Theme.background.white}
            >
              <View style={styles.sectionTextContainer}>
                <Image
                  style={styles.iconDraw}
                  source={require('assets/draw_pa.png')}
                />
                <Text
                  style={styles.sectionText}
                  numberOfLines={2}
                >
                  Draw an area
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {this.state.showProtectedAreas &&
          <MapModal
            visible
            onClosePress={() => this.setProtectedAreasStatus(false)}
            title={I18n.t('boundaries.selectArea')}
          >
            <ProtectedAreas
              country={this.props.setupCountry}
              onAreaSelected={this.onAreaSelected}
            />
          </MapModal>
        }
        {this.state.showDrawAreas &&
          <MapModal
            visible
            onClosePress={() => this.setDrawAreasStatus(false)}
            title={I18n.t('boundaries.drawArea')}
          >
            <DrawAreas
              country={this.props.setupCountry}
              onDrawAreaFinish={this.onDrawAreaFinish}
            />
          </MapModal>
        }
      </View>
    );
  }
}

SetupBoundaries.propTypes = {
  setSetupArea: React.PropTypes.func.isRequired,
  setupCountry: React.PropTypes.object.isRequired,
  onNextPress: React.PropTypes.func.isRequired
};

export default SetupBoundaries;
