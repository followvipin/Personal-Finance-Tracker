// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import LoggedHeader from './LoggedHeader';
import Profile from './Profile';

export default function App() {
  return (
    <div className="App">
      <header>
      <LoggedHeader />
      </header>
      <Profile/>
    </div>
  );
};
