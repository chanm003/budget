import React from 'react';
import { Form, Icon, Image, Input, Menu, Button, Label, Dropdown } from 'semantic-ui-react';
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
            {user.role === 'visitor'
              ? <Button as={Link} to='/login'>Log-in</Button>
              : renderDropdown(user)
            }
          </Menu.Item>

        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  );
}

const parseDistinguishedName = distinguishedName => {
  if (distinguishedName) {
    const parsed = distinguishedName
      .replace('CN=', '')
      .split('.')
      .slice(0, 2)
      .reverse();
    return {
      name: parsed.join(' '),
      initials: parsed.map(name => name[0]).join('')
    };
  }
}

const renderDropdown = user => {
  const { name, initials } = { name: 'Mike Chan', initials: 'MC' };

  return (
    <Dropdown
      pointing="top right"
      icon={null}
      trigger={<Label circular color="grey">{initials}</Label>}>
      <Dropdown.Menu>
        <Dropdown.Item text={`Signed in as ${name}`} disabled />
        <Dropdown.Item text="Sign out" as={Link} to='/logout' />
      </Dropdown.Menu>
    </Dropdown>
  );
}
