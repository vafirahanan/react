import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Routers from './pages/routers'


 const root = createRoot(document.getElementById('root'))
  
  root.render(
  <Provider store={store}>
    <Routers />
</Provider>
)
