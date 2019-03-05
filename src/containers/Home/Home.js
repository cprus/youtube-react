import React from 'react';
import './Home.scss';
import {HomeContent} from './HomeContent/HomeContent';
import {SideBar} from '../SideBar/SideBar';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent/>
      </React.Fragment>
    );
  }
}