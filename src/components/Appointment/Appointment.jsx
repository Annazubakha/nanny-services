import { Controller, useForm } from 'react-hook-form';
import s from './Appointment.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { appointmentSchema } from '../../schemas';
import { toast } from 'react-toastify';
import { postAppointment } from '../../api/api';

import { Icon } from 'components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const Appointment = ({ name, avatar_url, toggleModal }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const onSubmit = async (appointment) => {
    try {
      await postAppointment(appointment);
      toast.success(
        'Appointment was made sucessfull. Please wait a call from our manager.'
      );
      toggleModal();
    } catch (error) {
      console.log(error.message);
      toast.error(
        "Password is incorrect or user doesn't exist. Please, try again."
      );
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.input_wrapper_second}>
          <div className={s.input_wrapper}>
            <input type="text" {...register('address')} placeholder="Address" />
            <p className={s.form_error}>{errors.address?.message}</p>
          </div>
          <div className={s.input_wrapper}>
            <input type="text" {...register('phone')} placeholder="+380" />
            <p className={s.form_error}>{errors.phone?.message}</p>
          </div>
        </div>
        <div className={s.input_wrapper_second}>
          <div className={s.input_wrapper}>
            <input type="text" {...register('age')} placeholder="Child's age" />
            <p className={s.form_error}>{errors.age?.message}</p>
          </div>
          <div className={s.input_wrapper}>
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <DatePicker
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Meeting time"
                  placeholderText="00:00"
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  value={field.value}
                  selected={field.value}
                  onChange={(value) => {
                    console.log(value);
                    field.onChange(value);
                  }}
                  id="meeting-time"
                />
              )}
            />
            <label htmlFor="meeting-time">
              <Icon id="clock" className={s.icon} size={20} />
            </label>
            <p className={s.form_error}>{errors.time?.message}</p>
          </div>
        </div>
        <div className={s.input_wrapper}>
          <input type="email" {...register('email')} placeholder="Email" />
          <p className={s.form_error}>{errors.email?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <input
            type="text"
            {...register('name')}
            placeholder="Father's or mother's name"
          />
          <p className={s.form_error}>{errors.name?.message}</p>
        </div>
        <div className={s.input_wrapper}>
          <textarea
            type="text"
            {...register('comment')}
            placeholder="Comment"
          />
          <p className={s.form_error}>{errors.comment?.message}</p>
        </div>
        <button className={s.btn_submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
