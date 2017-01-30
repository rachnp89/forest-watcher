import {
  Dimensions
} from 'react-native';

const screen = Dimensions.get('window');
const colors = {
  color1: '#97be32',
  color2: '#555555',
  color3: '#8a8a8a',
  color4: '#f2f2f2',
  color5: '#ffffff',
  color6: '#dcdcdc'
};

const config = {
  screen: {
    width: screen.width,
    height: screen.height
  },
  colors: {
    color1: colors.color1,
    color2: colors.color2,
    color3: colors.color3,
    color4: colors.color4,
    color5: colors.color5,
    color6: colors.color6
  },
  font: 'firasansot',
  fontColors: {
    main: colors.color1,
    secondary: colors.color2,
    light: colors.color3,
    white: colors.color5
  },
  background: {
    main: colors.color4,
    secondary: colors.color1,
    white: colors.color5
  },
  margin: {
    left: 24
  },
  socialNetworks: {
    facebook: '#3b5998',
    twitter: '#00aced',
    google: '#ea4335'
  }
};

export default config;
