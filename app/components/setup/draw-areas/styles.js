import Theme from 'config/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background.modal
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 104,
    zIndex: 1,
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
  footerButton: {
    marginLeft: 8,
    marginRight: 8
  },
  footerTitle: {
    fontFamily: Theme.font,
    color: Theme.fontColors.white,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    position: 'absolute',
    zIndex: 2,
    bottom: 30,
    marginLeft: Theme.margin.left,
    opacity: 0.7
  }
});
