import m from "mithril";
import './styles/styles.css';

import app from './views';

m.route(document.body, '/', app);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
  });
}
