import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/create'}>Create</NavLink>
        <NavLink to={'/edit'}>Edit</NavLink>
    </div>
)

export default Header;