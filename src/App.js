import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { TimeAndLocation } from './components/TimeAndLocation';

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <NavBar />
        <SearchBar />
        
        <TimeAndLocation/>
      </div>

    </>
  );
}

export default App;
