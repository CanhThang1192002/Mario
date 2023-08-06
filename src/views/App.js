import '../styles/App.scss';
import Component1 from '../components/bai1/component1.js'
import Component2 from '../components/bai2/component2.js'
import Component3 from '../components/bai3/component3.js'
import Component4 from '../components/bai4/component4.js'
import Nav from './Nav.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/bai2" element={<Component2 />} />
          <Route path="/bai3" element={<Component3 />} />
          <Route path="/bai4" element={<Component4 />} />
        </Routes>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
