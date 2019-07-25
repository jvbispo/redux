import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.56.1' })
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
