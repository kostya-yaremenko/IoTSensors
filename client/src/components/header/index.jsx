import React from 'react'
import { NavLink } from 'react-router-dom'
import * as s from './_styles'
import { Head1 } from '../../_styles'
import UserIcon from '../svg/user'

const Header = () =>
  <s.HeaderWrap>
    <NavLink to='/'>
      <Head1>IoTSensors</Head1>
    </NavLink>
    <NavLink to='/user'>
      <UserIcon/>
      My account
    </NavLink>
  </s.HeaderWrap>

export default Header