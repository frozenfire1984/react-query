import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to={'/'}>Main</Link></li>
				<li><Link to={'/pagewithpagination'}>Page with pagination</Link></li>
				{/*<li><Link to={'/news'}>News!!!!</Link></li>*/}
				<li><Link to={'/about'}>About</Link></li>
			</ul>
			<hr/>
		</nav>
	)
}

export default Nav