import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import MyContactsPage from './pages/MyContactsPage/MyContactsPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyContactsPage />
      </PersistGate>
    </Provider>
  );
}
export default App;
