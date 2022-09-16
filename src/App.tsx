import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import AppRoutes from './routes';
import { store } from './store/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Routes>
        {AppRoutes}
      </Routes>
      </BrowserRouter>
      </div>
    </Provider>
   
  );
}

export default App;
