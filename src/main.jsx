// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  appStore  from './components/utils/store/appStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
     <Provider store={appStore}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </Provider>
  //  </StrictMode>,
)
