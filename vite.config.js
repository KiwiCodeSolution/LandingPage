import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default {
  base: "https://kiwicodesolution.github.io/LandingPage/",
  plugins: [handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })],
};