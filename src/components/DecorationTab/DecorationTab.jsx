import s from './DecorationTab.module.css';

import { Icon, MoveDecorationTab } from 'components';

export const DecorationTab = () => {
  return (
    <MoveDecorationTab>
      {(position, amount) => (
        <div
          style={{
            position: 'absolute',
            bottom: `${position.bottom}px`,
            right: `${position.right}px`,
          }}
        >
          <div className={s.wrapper}>
            <div className={s.wrapper_icon}>
              <Icon id="done" size={30} />
            </div>
            <div className={s.inside_wrapper}>
              <p className={s.description}>Experienced nannies</p>
              <p className={s.amount}>{amount}</p>
            </div>
          </div>
        </div>
      )}
    </MoveDecorationTab>
  );
};
