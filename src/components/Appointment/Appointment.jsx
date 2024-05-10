import { useForm } from 'react-hook-form';
import s from './Appointment.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '../../schemas';
export const Appointment = ({ name, avatar_url }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  return (
    <div className={s.wrapper}>
      <p className={s.description}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={s.inside_wrapper}>
        <img className={s.avatar} src={avatar_url} alt="Nanny's avatar" />
        <div>
          <p className={s.description}>Your nanny</p>
          <p className={s.name}>{name}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.input_wrapper}>
          <input type="text" {...register('address')} placeholder="Address" />
          <p className={s.form_error}>{errors.address?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input type="text" {...register('age')} placeholder="Child's age" />
          <p className={s.form_error}>{errors.age?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input type="email" {...register('email')} placeholder="Email" />
          <p className={s.form_error}>{errors.email?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input
            type="text"
            {...register('text')}
            placeholder="Father's or mother's name"
          />
          <p className={s.form_error}>{errors.text?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <textarea {...register('comment')} placeholder="Comment" />
          <p className={s.form_error}>{errors.text?.message}</p>
        </div>
        <button className={s.btn_submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
