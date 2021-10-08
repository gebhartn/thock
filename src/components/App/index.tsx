import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toHumanTime } from '../../helpers';
import { useInterval } from '../../hooks';
import { increment, selectDuration } from '../../store/ducks/session';

import * as S from './App';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const duration = useSelector(selectDuration);

  useInterval(() => {
    dispatch(increment());
  }, 1000);

  return (
    <S.Container>
      <code>{toHumanTime(duration)}</code>
    </S.Container>
  );
};
