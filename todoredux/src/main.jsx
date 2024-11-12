
import { createRoot } from 'react-dom/client'
import Router from './Routes/router.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Router />
    </Provider>
)
