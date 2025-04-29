import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ReduxTest from './pages/ReduxTest';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/redux-test" element={<ReduxTest />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
