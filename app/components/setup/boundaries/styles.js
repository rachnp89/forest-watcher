import Theme from 'config/theme';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: 26,
    marginLeft: Theme.margin.left
  },
  selector: {
    marginTop: 19
  },
  selectorLabel: {
    fontFamily: Theme.font,
    color: Theme.fontColors.light,
    fontSize: 17,
    fontWeight: '400',
    marginLeft: Theme.margin.left,
    ...Platform.select({
      android: {
        marginBottom: 6
      }
    })
  },
  actions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  section: {
    width: (Theme.screen.width / 2) - 12,
    height: 184,
    marginLeft: 8,
    marginBottom: 8,
    backgroundColor: Theme.background.white,
    borderWidth: 1,
    borderColor: Theme.colors.color6,
    alignItems: 'center'
  },
  sectionDisabled: {
    opacity: 0.5
  },
  sectionTextContainer: {
    width: 116,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  sectionText: {
    fontFamily: Theme.font,
    color: Theme.fontColors.secondary,
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        lineHeight: 21
      },
      android: {
        lineHeight: 26
      }
    })
  },
  iconProtected: {
    width: 86,
    height: 84,
    marginTop: 25,
    marginBottom: 8
  },
  iconDraw: {
    width: 98,
    height: 80,
    marginTop: 26,
    marginBottom: 19
  },
  buttonPos: {
    position: 'absolute',
    bottom: 50,
    left: 8,
    right: 8
  }
});
