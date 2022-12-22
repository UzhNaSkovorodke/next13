import React from 'react'

import styles from './Header.module.scss'
import Logo from './Logo'
import LoginForm from './login-form/LoginForm'

type Props = {}

const Header = (props: Props) => {
	return (
		<>
			<header className={styles.header}>
				<Logo />
				<LoginForm />
			</header>
		</>
	)
}

export default Header
