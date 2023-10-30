import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('19921370');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen">

      <form onSubmit={handleSubmit}>

        <div className="bg-gray-100 py-20 px-24 rounded-lg shadow-lg">
        <div className="mb-4">

          <label htmlFor="username" className="block text-base font-bold mb-2 font-sans">
            Username
          </label>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-base font-bold mb-2 font-sans">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required/>
        </div>

        <div className="text-center">

            <Link to = 'home'>
          <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded-lg font-bold font-sans">
            Login
          </button>
          </Link>
        
        </div>
        </div>

      </form>

    </div>
  );
};

export default Login;