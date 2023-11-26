import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
<<<<<<< HEAD
=======

>>>>>>> 523778f8f68e3d03c9361b8fd20f343d3671bce8
        <App />
     </Provider>
)
