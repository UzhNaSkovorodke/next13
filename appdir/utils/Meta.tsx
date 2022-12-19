import Head from 'next/head'
import React from 'react'

type Props = {
	description?: string
	title: string
}

function Meta({ description, title }: Props) {
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
