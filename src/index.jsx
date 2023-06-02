import { render } from 'react-dom';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';

render(
  document.getElementById('root'),
  <Provider store={store} >
    <App />
  </Provider>
)