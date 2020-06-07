import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import { useState } from 'react';

const SignIn = () => {
  const [userCreds, setCreds] = useState({ email: '', password: '' });
  const { email, password } = userCreds;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCreds({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCreds({
      ...userCreds,
      [name]: value,
    });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
