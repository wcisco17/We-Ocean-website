import { NextPage } from 'next';
import React from 'react';
import HomePage from '../modules/Home';

interface IPropsHome extends NextPage { };

const Home: React.FC<IPropsHome> = (props) => <HomePage {...props} />

export default Home;
