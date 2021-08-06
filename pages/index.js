import	React from	'react';

function	Index() {
	return (
		<section className={'w-full flex justify-center items-start lg:items-center lg:mb-64'}>
			<div className={'m-6 sm:m-8 md:m-12 lg:m-12 lg:max-w-6xl p-4 md:p-8 lg:p-10 relative rounded-lg'} style={{background: 'rgba(10, 29, 63, 0.7)'}}>
				<a href={'/f1099msc.pdf'} target={'_blank'} rel={'noreferrer'}>
					<img src={'/form1099.png'} className={'w-full h-full'} />
				</a>
			</div>
		</section>
	);
}

export default Index;
