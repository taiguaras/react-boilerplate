import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import ReduxTest from './pages/ReduxTest';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-100">Boilerplate</h1>
                  <p className="text-gray-500">Redux, Tailwind, Vite, React, Tests</p>
                </div>
                <nav>
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/redux-test" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Redux Test</Link>
                </nav>
              </div>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <h1>Vite + React</h1>
                  <div className="card">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                    </button>
                    <p>
                      Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                  </div>
                </div>
              } />
              <Route path="/redux-test" element={<ReduxTest />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
