import React from 'react'

import Logo from './Logo'
import LoginForm from './login-form/LoginForm'

type Props = {}

const Header = (props: Props) => {
	return (
		<>
			<header>
				<Logo />
				<LoginForm />
			</header>
		</>
	)
}

export default Header
