import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default {
  base: "/",
  plugins: [handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })],
};