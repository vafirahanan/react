
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Snapdeal from './components/snapdeal'
import Snapdealhero from './components/snapdealhero';
// import Snapdealmiddle from './components/snapdealmiddle';
import Snapdealfooter from './components/snapdealfooter';
import Info from './components/info';
import Policy from './components/policy';
import Rowfooter from './components/rowfooter';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Snapdeal />
    <Snapdealhero />
    {/* <Snapdealmiddle /> */}
    <Rowfooter />
    <Policy />
    <Info />
    <Snapdealfooter />
    {/* <Todo />
    <Toaster position='bottom-right'/> */}
 </StrictMode>
)


  