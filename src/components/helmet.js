import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						description
						
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				
				<title>{data.site.siteMetadata.title}</title>
				<html lang="es-MX" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} /> />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				
				<meta name="robots" content="index,follow"></meta>
				<link rel="canonical" href="https://equilibrio.studio/" />
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
            <meta property="og:url" content="https://equilibrio.studio/" />
            <meta property="og:title" content="Posicionamiento web en Querétaro" />
            <meta property="og:description" content="Somos una agencia de posicionamiento web enfocada en pequeñas y medianas empresas. Nuestras otras fortalezas: social media, diseño web y gráfico." />
            <meta property="og:image" content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg" />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://equilibrio.studio/" />
            <meta property="twitter:title" content="Posicionamiento web en Querétaro" />
            <meta property="twitter:description" content="Somos una agencia de posicionamiento web enfocada en pequeñas y medianas empresas. Nuestras otras fortalezas: social media, diseño web y gráfico." />
            <meta property="twitter:image" content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg" />

			</Helmet>
		)}
	/>
);
