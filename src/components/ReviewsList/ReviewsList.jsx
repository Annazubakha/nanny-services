import { ReviewsItem } from 'components';
import s from './ReviewsList.module.css';
import { Modal, Appointment } from '../../components';
import { useModal } from '../hooks';
export const ReviewsList = ({ reviews, name, avatar_url }) => {
  const [isModalAppointment, toggleIsModalAppointment] = useModal();
  return (
    <>
      <ul className={s.list}>
        {reviews?.map(({ comment, rating, reviewer }) => (
          <ReviewsItem
            key={reviewer}
            comment={comment}
            rating={rating}
            reviewer={reviewer}
          />
        ))}
      </ul>
      <button className={s.btn_appointment} onClick={toggleIsModalAppointment}>
        Make an appointment
      </button>
      {isModalAppointment && (
        <Modal
          title="Make an appointment with a babysitter"
          toggleModal={toggleIsModalAppointment}
        >
          <Appointment
            toggleModal={toggleIsModalAppointment}
            name={name}
            avatar_url={avatar_url}
          />
        </Modal>
      )}
    </>
  );
};
