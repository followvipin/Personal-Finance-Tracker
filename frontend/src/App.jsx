// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import Header from './Header';
import UserCreationForm from './UserCreationForm';
import Profile from './Profile';

export default function App() {
  return (
    <div className="App">
      <header>
      <Header />
      </header>
      <Profile/>

      <UserCreationForm /> 
    </div>
  );
};
