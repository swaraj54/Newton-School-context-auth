import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <AuthProvider>
      
      <Logout />
      <Login />
    </AuthProvider>
  );
}

export default App;
