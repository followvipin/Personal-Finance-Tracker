// // import logo from './logo.svg';
import './App.css';
// // import Header from './Header';
// import Header from './Header';
// import UserCreationForm from './UserCreationForm';
import Profile from './Profile';
// // import userCreationForm from './UserCreationForm';

// export default function App() {
//   return (
//     <div className="App">
//       <header>
//       <Header />
//       </header>
      

//       {/* <UserCreationForm />  */}
//     </div>
//   );
// };


import React, { useState } from 'react';
import Header from './Header'; 
import UserCreationForm from './UserCreationForm'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); 

  const showRegisterPage = () => {
    setCurrentPage("register"); 
  };

  const showHomePage = () => {
    setCurrentPage("home"); 
  };

  return (
    <div>
      
      <Header onRegisterClick={showRegisterPage} />

      <main>
        {currentPage === "home" && (
          <> {/* Default home page content */}
            <h1>Welcome to Financlo</h1>
            <p>Manage your finances easily.</p>
          </>
        )}

        {currentPage === "register" && ( 
          <UserCreationForm onBack={showHomePage} />
        )}
      </main>
    </div>
  );
};

export default App;

