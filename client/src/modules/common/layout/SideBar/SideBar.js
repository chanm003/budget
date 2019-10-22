import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';

export function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className='side-nav'>

      <SideBarItem path='/' label='Home' icon='home' />

      <Divider />

      <SideBarHeader title='Administration' />


      <Divider />

      <SideBarItem label='Report history' icon='flag' />
      <SideBarItem label='Help' icon='help circle' />
      <SideBarItem label='Send feedback' icon='comment' />

    </Menu>
  );
}