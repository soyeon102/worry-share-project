import Layout from '../layout/Layout';
import MainButton from '../MainButton';
import CommonButton from '../elements/CommonButton';
import styled from 'styled-components';

const Home = () => {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <Layout>
      <MainButton />
      <MainButton />
      <h2>Common Button Test</h2>
      <CommonButton text='delete' onClick={handleClick} variant='outlined' />
      <CommonButton text='test' onClick={handleClick} variant='contained' />
      <CommonButton iconColor='primary' onClick={handleClick} />
    </Layout>
  );
};

export default Home;
