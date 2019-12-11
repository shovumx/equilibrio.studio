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
            <meta property="og:title" content="Agencia de Marketing digital en Querétaro | Equilibrio" />
            <meta property="og:description" content="Somos una agencia de marketing digital enfocada en pequeñas y medianas empresas. Nuestras fortalezas: SEO, social media, diseño web y gráfico." />
            <meta property="og:image" content="https://equilibrio.studio/static/7ee654e0323b4c3b91b80cb5687683d5/ba299/seo.png" />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://equilibrio.studio/" />
            <meta property="twitter:title" content="Agencia de Marketing digital en Querétaro | Equilibrio" />
            <meta property="twitter:description" content="Somos una agencia de marketing digital enfocada en pequeñas y medianas empresas. Nuestras fortalezas: SEO, social media, diseño web y gráfico." />
            <meta property="twitter:image" content="https://equilibrio.studio/static/7ee654e0323b4c3b91b80cb5687683d5/ba299/seo.png" />

			</Helmet>
		)}
	/>
);
