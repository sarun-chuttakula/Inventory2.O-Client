import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from './contexts/AuthProvider'
import { theme } from './styles/theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AuthProvider>
              {/* <Auth0Provider
              domain="dev-kplcs1pr0hwa12ng.us.auth0.com"
              clientId="ccbAC6Xu1GMDnJuzfA4fX8igPj6AyXxY"
              authorizationParams={{ redirect_uri: window.location.origin }}
            > */}
              <Routes>
                <Route path='/*' element={<App />} />
              </Routes>
              {/* </Auth0Provider> */}
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
