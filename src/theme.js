import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#F4F9FE',
    primary: '#00BCD4',
    accent: '#E91E63',
  },
};

export default theme;