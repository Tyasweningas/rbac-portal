import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RoleGuard from './components/RoleGuard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <RoleGuard allowedRoles={['admin', 'editor', 'viewer']}>
            <DashboardPage />
          </RoleGuard>
        }
      />
    </Routes>
  );
};

export default App;




// import './App.css'
// import LoginPage from './pages/LoginPage'
// import DashboardPage from './pages/DashboardPage'
// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//    <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/dashboard" element={<DashboardPage />} />
//     </Routes>
//     </>
//   )
// }

// export default App
