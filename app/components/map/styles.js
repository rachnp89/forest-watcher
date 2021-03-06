import Theme from 'config/theme';
import {
  Platform,
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEAE2'
  },
  map: {
    flex: 1
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    left: 0,
    right: 0,
    top: 0,
    height: 104,
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  headerBg: {
    width: Theme.screen.width,
    height: 104,
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: 1,
    top: 0
  },
  headerTitle: {
    fontFamily: Theme.font,
    color: Theme.fontColors.white,
    fontSize: 21,
    fontWeight: '400',
    position: 'absolute',
    zIndex: 2,
    top: 16,
    left: 56,
    ...Platform.select({
      ios: {
        marginTop: 24
      }
    })
  },
  headerBtn: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 2,
    ...Platform.select({
      ios: {
        marginTop: 24
      }
    })
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 124,
    zIndex: 3,
    position: 'absolute'
  },
  footerBg: {
    width: Theme.screen.width,
    height: 104,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '180deg' }]
  },
  footerTitle: {
    fontFamily: Theme.font,
    color: Theme.fontColors.white,
    fontSize: 17,
    fontWeight: '500',
    position: 'absolute',
    zIndex: 2,
    bottom: 30,
    marginLeft: Theme.margin.left,
    opacity: 1,
    backgroundColor: 'transparent'
  },
  footerButton: {
    left: 8,
    right: 8,
    bottom: 55,
    position: 'absolute',
    zIndex: 2
  }
});
