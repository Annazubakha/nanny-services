import { useState, useEffect } from 'react';
import s from '../BgImg/BgImg.module.css';
import { useWindowSizeHook } from '../../helpers';

export const MoveDecorationTab = ({ children }) => {
  const [position, setPosition] = useState({ bottom: 90, right: 0 });
  const [direction, setDirection] = useState({ bottom: 1, right: 1 });
  const [amount, setAmount] = useState('15,000');
  const { windowSize } = useWindowSizeHook();

  useEffect(() => {
    const moveDecorationTab = () => {
      const Wrapper = document.querySelector(`.${s.insideWrapper}`);
      if (Wrapper) {
        const parentWidth = Wrapper.clientWidth;
        const parentHeight = Wrapper.clientHeight;

        let heightAdjustment = parentHeight - 118;
        let widthAdjustment = parentWidth - 284;

        if (windowSize.innerWidth < 768) {
          heightAdjustment = parentHeight - 80;
          widthAdjustment = parentWidth - 200;
        }

        setPosition((prevPosition) => {
          const newBottom = prevPosition.bottom + 5 * direction.bottom;
          const newRight = prevPosition.right + 5 * direction.right;

          const clampedBottom = Math.max(
            0,
            Math.min(newBottom, heightAdjustment)
          );
          const clampedRight = Math.max(0, Math.min(newRight, widthAdjustment));

          const newDirection = {
            bottom:
              clampedBottom === 0 || clampedBottom === heightAdjustment
                ? -direction.bottom
                : direction.bottom,
            right:
              clampedRight === 0 || clampedRight === widthAdjustment
                ? -direction.right
                : direction.right,
          };

          setDirection(newDirection);

          if (
            clampedBottom === 0 ||
            clampedBottom === heightAdjustment ||
            clampedRight === 0 ||
            clampedRight === widthAdjustment
          ) {
            updateAmount();
          }

          return {
            bottom: clampedBottom,
            right: clampedRight,
          };
        });
      }
    };

    const updateAmount = () => {
      setAmount(generateRandomAmount());
    };

    const generateRandomAmount = () => {
      const randomValue = Math.random() * 100;
      return parseFloat(randomValue).toFixed(3);
    };

    const intervalId = setInterval(moveDecorationTab, 80);

    return () => clearInterval(intervalId);
  }, [direction, windowSize.innerWidth]);

  return children(position, amount.replace(/\./g, ','));
};
