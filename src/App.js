
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="App">
      <NavBar  
      onSearch={setSearchTerm} 
      searchTerm={searchTerm} 
      toggleSidebar={toggleSidebar}
      />
      { (window.innerWidth >=1024 || isSidebarOpen ) && <SideBar />}
      <MainContent searchTerm={searchTerm} />
    </div>
  );
}

export default App;
