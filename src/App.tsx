import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ReduxTest from './pages/ReduxTest';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/auth/SignIn';
import TaskBoard from './components/TaskBoard';
import Posts from './pages/Posts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/redux-test" element={<ReduxTest />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/task-board" element={<TaskBoard />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
