import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/users', user);
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
