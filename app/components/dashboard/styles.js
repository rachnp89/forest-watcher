import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20
  },
  item: {
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#333'
  },
  icon: {
    width: 80,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#333'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 5
  }
});