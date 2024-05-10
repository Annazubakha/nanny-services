import { useForm } from 'react-hook-form';

import s from './RegisterForm.module.css';
import { registerSchema } from '../../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Icon } from 'components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';
export const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const passVisibility = () => {
    setShowPass((prevState) => !prevState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      console.log('User created:', user);
      toast.success(
        'Your account was registered successfully. Please, log in to your account.'
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <p className={s.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_wrapper}>
          <input type="text" {...register('name')} placeholder="Name" />
          <p className={s.form_error}>{errors.name?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input type="email" {...register('email')} placeholder="Email" />
          <p className={s.form_error}>{errors.email?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input
            type={showPass ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          <p className={s.form_error}>{errors.password?.message}</p>

          <button
            type="button"
            className={s.eyeIconBtn}
            onClick={passVisibility}
          >
            {showPass ? (
              <Icon id="open-eye" size={20} />
            ) : (
              <Icon id="close-eye" size={20} />
            )}
          </button>
        </div>
        <button className={s.btn_submit} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};