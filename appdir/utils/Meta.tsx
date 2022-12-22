import Head from 'next/head'
import React from 'react'

import { IMeta } from './meta.interface'

function Meta({ description, title }: IMeta) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta itemProp="robots" name="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default Meta
