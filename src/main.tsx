import ReactDOM from 'react-dom/client'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { persistor, store } from './store/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
