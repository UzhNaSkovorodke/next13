import React from 'react'
import { FC, PropsWithChildren, ReactNode } from 'react'

import Meta from '@/utils/Meta'
import { IMeta } from '@/utils/metainterface'

import Header from './header/Header'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
