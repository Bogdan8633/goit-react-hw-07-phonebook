import { Provider } from 'react-redux';

import { store } from './redux/store';

import MyContactsPage from './pages/MyContactsPage/MyContactsPage';

function App() {
  return (
    <Provider store={store}>
      <MyContactsPage />
    </Provider>
  );
}
export default App;
