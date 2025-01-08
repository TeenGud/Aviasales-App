import React, { useEffect } from 'react';
import cls from './App.module.scss';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { fetchTickets } from '../../state/tickets/ticketsSlice.ts';
import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Spin } from 'antd';

function App() {
  const { error, status } = useSelector((state: RootState) => state.tickets);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  return (
    <div className={cls.app}>
      {error ? (
        <Alert message="Sorry. There is some error" type="error" />
      ) : status === 'loading' ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48, marginTop: 60 }} spin />} />
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
