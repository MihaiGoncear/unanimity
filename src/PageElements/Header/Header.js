import React from 'react';
import { NavigationBar } from './NavigationBar'
import logo from '../../media/img/logo.png'; 


export function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <NavigationBar menuSelection={props.menuSelection} />
        </div>
    )
  }