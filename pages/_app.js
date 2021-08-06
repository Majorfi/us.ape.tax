import	React							from	'react';
import	Head							from	'next/head';

import	'style/Default.css';
import	'tailwindcss/tailwind.css';

function	AppWrapper(props) {
	const	{Component, pageProps, router} = props;

	return (
		<>
			<Head>
				<title>{'US Ape'}</title>
				<link rel={'icon'} href={'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇺🇸🦍</text></svg>'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={'ape.tax - Taxes for US apes'} />
				<meta name={'msapplication-TileColor'} content={'#9fcc2e'} />
				<meta name={'theme-color'} content={'#ffffff'} />
				<meta charSet={'utf-8'} />
			</Head>
			<main id={'app'} className={'flex w-full h-full relative min-h-screen'} style={{backgroundImage: 'url("/background.jpeg")'}}>
				<Component
					key={router.route}
					element={props.element}
					router={props.router}
					{...pageProps} />
			</main>
		</>
	);
}

function	MyApp(props) {
	const	{Component, pageProps} = props;
	
	return (
		<AppWrapper
			Component={Component}
			pageProps={pageProps}
			element={props.element}
			router={props.router} />
	);
}


export default MyApp;
