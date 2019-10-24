import React from 'react';
import { Form, Icon, Image, Input, Menu, Button } from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { useStore } from '../../../../context';

export default function HeaderNav() {
  const { auth: { user } } = useStore();
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
            {user.role === 'visitor'
              ? (
                <Button as={Link} to='/login'>Log-in</Button>
              )
              : (
                <Image as={Link} to='/login' src='http://via.placeholder.com/80x80' avatar />
              )
            }
          </Menu.Item>

        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
}

