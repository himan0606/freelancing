import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { AnimatePresence } from 'framer-motion';

import { Toaster } from 'react-hot-toast';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import ListDeveloper from './components/ListDeveloper';
import DevDetails from './components/DevDetails';
import DevProfile from './components/DevProfile';




function App() {
  return (
    <div>
      <Toaster position='top right' />
      <AnimatePresence>
        <BrowserRouter>
          <AppProvider>
            <Navbar />
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Login />} path='/login' />
              <Route element={<SignUp />} path='/signup' />
              <Route element={<ListDeveloper />} path='/listdevs' />
              <Route element={<DevDetails />} path='/Devdetails' />
              <Route element={<DevProfile />} path='/devprofile' />

            </Routes>
          </AppProvider>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
