import React from 'react';
import { Form, Icon, Image, Input, Menu, Button, Label, Dropdown, Popup } from 'semantic-ui-react';
import { roleNames } from 'shared';

import './HeaderNav.scss';
import logo from '../../../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authentication/authContext';

export default function HeaderNav() {
  const { user } = useAuth();

  return (
    <Menu borderless className='top-menu' fixed='top'>
      <Menu.Item header className='logo'>
        <Link to='/'><Image src={logo} size='tiny' /></Link>
      </Menu.Item>
      <Menu.Menu className='nav-container'>
        <Menu.Item className='search-input'>
          <Form>
            <Form.Field>
              <Input placeholder='Search'
                size='small'
                action='Go'
              />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Icon className='header-icon' name='video camera' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='grid layout' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='chat' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='alarm' size='large' />
          </Menu.Item>
          <Menu.Item name='avatar'>
            {user.role === roleNames.VISITOR
              ? <Button as={Link} to='/login'>Log-in</Button>
              : renderDropdown(user)
            }
          </Menu.Item>

        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
}

const renderDropdown = user => {
  const isProfileValid = isUserProfileValid(user);
  let trigger = null;
  let name = '';

  if (isProfileValid) {
    name = `${user.firstName} ${user.lastName}`;
    const initials = `${user.firstName[0]}${user.lastName[0]}`;
    trigger = <Label circular color="grey">{initials}</Label>;
  } else {
    trigger = <Popup content='Click to update your profile' position='bottom right' trigger={<Button circular negative icon='warning' />} />
  }

  return (
    <Dropdown
      pointing="top right"
      icon={null}
      trigger={trigger}>
      <Dropdown.Menu>
        {isProfileValid && (<Dropdown.Item text={`Signed in as ${name}`} disabled />)}
        <Dropdown.Item text="Edit Profile" as={Link} to='/userprofile/edit' />
        <Dropdown.Item text="Sign out" as={Link} to='/logout' />
      </Dropdown.Menu>
    </Dropdown>
  );
}

const isUserProfileValid = user => {
  return !!user.firstName.trim() && !!user.lastName.trim() && !!user.email.trim();
}
