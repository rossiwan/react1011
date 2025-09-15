import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import TouchList from './components/TodoList.tsx' 
import Grade from './components/Grade.tsx'
import Hook from './components/TodoListHookForm.tsx'
import GovernmentApp from './components/gover.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    {/*<TouchList />*/}
    {/*<Grade />*/}
    {<GovernmentApp />}
    {/*<Hook />*/}
  </StrictMode>,
)
