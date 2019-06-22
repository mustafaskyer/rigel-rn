import React from 'react'
import { connect } from 'react-redux';
import Navigator from './AppNavigation';

const Nav = props =>  <Navigator {...props} />
      
export default connect(null)(Nav)