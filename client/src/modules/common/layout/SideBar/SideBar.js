import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import { routes } from '../../../../routes';

export function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className='side-nav'>

      <SideBarItem path='/' label='Home' icon='home' />

      <Divider />

      <React.Fragment>
        <SideBarHeader title='Administration' />

        <SideBarItem path={routes.directorateList.path} label='Directorates' icon='comment' />

        <Divider />
      </React.Fragment>

      <SideBarItem label='Report history' icon='flag' />
      <SideBarItem label='Help' icon='help circle' />
      <SideBarItem label='Send feedback' icon='comment' />

    </Menu>
  );
}