import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { registerSchema } from '../../schemas';
import { auth, database } from '../../firebase/firebase';
import { Loader, Icon } from 'components';
import s from './RegisterForm.module.css';
export const RegisterForm = ({ toggleModal, setUserName }) => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      const { email, password, name } = data;
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await set(ref(database, `users/${user.uid}`), {
        email: user.email,
        name: name,
      });
      toast.success('Your account was registered successfully.');
      setUserName(name);
      toggleModal();
      return user;
    } catch {
      toast.error(
        'Account with such email is already in use. Please try again.'
      );
    }
    setIsLoading(false);
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
          {isLoading && <Loader size={8} classTitle="smallLoader" />}
        </button>
      </form>
    </>
  );
};
