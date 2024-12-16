import React, { useState } from 'react';
import axios from 'axios';

const CreateStore = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    username: '',
    password: '',
    aggregators: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/create-store', formData);
      console.log('Store created:', response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Store Name" onChange={e => setFormData({ ...formData, storeName: e.target.value })} />
      <input type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Create Store</button>
    </form>
  );
};

export default CreateStore;
