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
import LoginForm from './LoginForm';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("home"); 

//   const showRegisterPage = () => {
//     setCurrentPage("register"); 
//   };

//   const showLoginPage = () => {
//     setCurrentPage("login");
//   }

//   const showHomePage = () => {
//     setCurrentPage("home"); 
//   };

//   return (
//     <div>    
//       <Header onRegisterClick={showRegisterPage} 
//       onLoginClick={showLoginPage}/>

//       <main>
//         {currentPage === "home" && (
//           <> {/* Default home page content */}
//             <h1>Welcome to Financlo</h1>
//             <p>Manage your finances easily.</p>
//           </>
//         )}

//         {currentPage === "register" && ( 
//           <UserCreationForm onBack={showHomePage} />
//         )}
//         {currentPage === "login" && (
//           <LoginForm onBack={showHomePage} />
//         )

//         }
//       </main>
//     </div>
//   );
// };



const App = () => {
  const [page, setPage] = useState("home"); // State to track current page

  // Function to handle register click
  const handleRegisterClick = () => {
    setPage("register"); // Update the page to show registration form
  };

  // Function to handle login click
  const handleLoginClick = () => {
    setPage("login"); // Update the page to show login form
  };

  return (
    <div>
      {/* Pass the functions as props to the Header */}
      <Header 
        onRegisterClick={handleRegisterClick} 
        onLoginClick={handleLoginClick} 
      />
      
      {/* Conditional rendering based on page state */}
      {page === "home" && (
        <div>
          <h1>Welcome to Financlo</h1>
          <p>This is the homepage content.</p>
        </div>
      )}
      
      {page === "login" && (
        <div>
          {/* <h1>Login Page</h1> */}
          <LoginForm /> {/* Render Login Form */}
        </div>
      )}
      
      {page === "register" && (
        <div>
          {/* <h1>Registration Page</h1> */}
          <UserCreationForm /> {/* Render Registration Form */}
        </div>
      )}
    </div>
  );
};

export default App;

