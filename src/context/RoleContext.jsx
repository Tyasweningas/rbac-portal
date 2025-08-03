import { createContext, useState } from 'react';
import roles from './roles';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(roles.VIEWER); // default role

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};


export { RoleContext };