import '../src/styles/styles.scss';
import '../src/styles/color.scss';
import '../src/assets/css/aeolus.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}