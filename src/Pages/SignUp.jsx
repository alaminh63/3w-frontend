import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userName: '',
    password: '',
    avatar: null,
    coverImage: null,
  });

  const isImageFile = (file) => file.type.startsWith('image/');

  const handleChange = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file' && files.length > 0 && !isImageFile(files[0])) {
      // Handle invalid file type (show an error message or reset the input)
      console.error('Invalid file type. Please choose an image file.');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:8000/api/v1/users/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful registration, e.g., show a success message or redirect to login page
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle registration error, e.g., display an error message to the user
      console.error('Registration failed:', error);

      if (error.response && error.response.data && error.response.data.message) {
        // Display the error message to the user
        alert(`Registration failed: ${error.response.data.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Avatar:
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Cover Image:
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
