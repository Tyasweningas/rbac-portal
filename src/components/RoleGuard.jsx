import { Navigate } from 'react-router-dom';
import { useRole } from '../context/useRole';

const RoleGuard = ({ allowedRoles, children }) => {
  const { role } = useRole();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleGuard;
