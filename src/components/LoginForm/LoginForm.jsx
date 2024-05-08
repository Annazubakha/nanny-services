import { useForm } from 'react-hook-form';

import s from './LoginForm.module.css';
import { loginSchema } from '../../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Icon, Button } from 'components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const passVisibility = () => {
    setShowPass((prevState) => !prevState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      console.log('User created:', user);
      navigate('/nannies');
      toast.sucess('LogIn is successfully.');
    } catch (error) {
      toast.error(
        "Password is incorrect or user doesn't exist. Please, try again."
      );
    }
  };

  return (
    <>
      <p className={s.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
        <Button className={s.btn_submit} type="submit">
          Log In
        </Button>
      </form>
    </>
  );
};
