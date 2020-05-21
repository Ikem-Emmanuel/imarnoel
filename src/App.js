import React, { Component } from 'react';
import emma from './emma.png';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Ikem Emmanuel',
			subTitle: 'Web Developer | Frontend Deeveloper | UI/UX Designer',
			location: 'Lagos, Nigeria',
			about: `A creative Web Developer, UI/UX Designer, Front-end Developer
									with over 3 years of experience in developing robust Web
									Applications such as a Seat booking platform, Assets management
									system, Supervisors portal for monitoring Examination, Drivers’
									license User registration and allocation portal, the Coca-cola
									trophy tour ticket validation and user registration portal with
									HTML/CSS(Tailwindcss), JavaScript (React), Bootstrap, PHP
									(Laravel), WordPress, and Odoo.`,
			cvPage: 'https://bit.ly/2ZmTw4t',
			projectPage: 'https://github.com/Ikem43?tab=repositories',
			linkedinpage: 'https://www.linkedin.com/in/emmanuel-ikem-87658bb0/',
		};
	}

	render() {
		const { title, subTitle, location, about, cvPage, projectPage, linkedinpage } = this.state;
		return (
			<div className='container mx-auto p-6'>
				<div className='lg:w-3/4 lg:mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden'>
					<div className='sm:items-center md:flex md:shrink-0 px-2 py-3 m-3'>
						<div className='flex-shrink-0'>
							<img className='h-48 w-48 rounded-full' src={emma} alt='' />
						</div>
						<div className='my-3'>
							<div className='ml-3 pt-1 px-3'>
								<p className='text-xl leading-tight text-dark'>{title}</p>
								<p className='text-md leading-tight text-gray-800'>{subTitle}</p>
								<p className='text-sm text-gray-500'>{location}</p>
								<p className='text-sm text-left text-gray-500 leading-tight my-3'>
									{about}
								</p>
								<div className='flex'>
									<a
										href={cvPage}
										target='_blank'
										className='sm:flex-shrink-0 text-green-500 hover:text-green-100 hover:bg-green-400 border border-green-500 text-xs font-semibold rounded px-4 py-2 mr-6 leading-normal'>
										Resume
									</a>

									<a
										href={linkedinpage}
										target='_blank'
										className='sm:flex-shrink-0 text-green-500 hover:text-green-100 hover:bg-green-400 border border-green-500 text-xs font-semibold rounded px-4 py-2 mr-6 leading-normal'>
										Linkedin
									</a>

									<a
										href={projectPage}
										target='_blank'
										className='sm:flex-shrink-0 text-green-500 hover:text-green-100 hover:bg-green-400 border border-green-500 text-xs font-semibold rounded px-4 py-2 mr-6 leading-normal'>
										Projects
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
