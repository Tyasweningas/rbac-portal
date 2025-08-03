import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/useRole';
import roles from '../context/roles';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setRole } = useRole();
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState({ email: '', role: '' });

  const handleLogin = () => {
    const newErrors = { email: '', role: '' };
    let isValid = true;

    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email (must include "@")';
      isValid = false;
    }

    if (!selectedRole) {
      newErrors.role = 'Please select a role';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setRole(selectedRole);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-pink-300 to-zinc-100">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Login
        </h2>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-300 outline-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-8">
          <label htmlFor="role-select" className="block text-gray-700 font-medium mb-2">
            Select Role:
          </label>
          <select
            id="role-select"
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-300 outline-none ${
              errors.role ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">-- Choose a role --</option>
            {Object.values(roles).map(role => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold text-lg transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
