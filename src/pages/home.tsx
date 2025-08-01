import Button from '../ui/button'
import MotionSection from '../ui/motion-section'

const Home = () => {
	return (
		<>
			{/* Lost & Found Made Easy */}
			<MotionSection as={'section'}>
				<div className='container min-h-[650px] d-between max-md:gap-5 mb-10 md:mb-20 max-lg:flex-col-reverse max-lg:items-start'>
					<div className='w-full lg:max-w-lg'>
						<p className='section-paragraph'>Lost & Found Made Easy</p>
						<h2 className='section-title'>How Trace It Works</h2>
						<p className='section-description'>
							Lost something important — like your wallet, backpack, or phone?
							Or maybe you found something that clearly belongs to someone else?
							With Trace It, reporting lost and found items has never been
							easier. Help others recover what they've lost, or post your own
							item and let the community bring it back to you. Together, we can
							reconnect people with what matters most.
						</p>

						<div className='max-sm:flex max-sm:flex-col max-sm:gap-2'>
							<Button label='Lost Item' url={'/lost'} className='mr-3' />
							<Button label='Found Item' url={'/found'} variant='outline' />
						</div>
					</div>

					<div className='w-1/3 max-md:w-80 max-sm:w-60 max-lg:mx-auto'>
						<img
							src='/assets/images/home/hero.svg'
							alt='Lost Property'
							className='size-full object-contain'
						/>
					</div>
				</div>
			</MotionSection>

			{/* Lost Property */}
			<MotionSection as={'section'}>
				<div className='container  min-h-[650px] d-between max-lg:gap-5 mb-10 md:mb-20 max-lg:flex-col-reverse max-lg:items-start'>
					<div className='w-full lg:max-w-lg'>
						<h2 className='section-title'>Lost Property</h2>
						<p className='section-description'>
							If you have lost an item in the terminal building or along the
							walking routes to or from the aircraft, please contact the
							airport’s lost property service, as they manage items lost within
							the airport premises.
						</p>

						<p className='section-description'>
							If your item was lost onboard an aircraft and Swissport was the
							handling partner for your airline at the arrival airport, please
							refer to the contact list on this page to begin the recovery
							process.
						</p>

						<p className='section-description'>
							Please note that all Duty-Free items will be handed over to local
							Customs and lost passports will be given to the border agency at
							the arrival airport.
						</p>

						<Button label='Track baggage' />
					</div>

					<div className='w-1/2 max-lg:w-full'>
						<img
							src='/assets/images/home/1.jpg'
							alt='Lost Property'
							className='size-full object-contain'
						/>
					</div>
				</div>
			</MotionSection>

			{/* SITA worldtracer */}
			<MotionSection as={'section'}>
				<div className='container min-h-[650px] d-between max-lg:gap-5 mb-10 md:mb-20 max-lg:flex-col max-lg:items-start'>
					<div className='w-1/2 max-lg:w-full'>
						<img
							src='/assets/images/home/2.jpg'
							alt='Lost Property'
							className='size-full object-contain'
						/>
					</div>

					<div className='w-full lg:max-w-md'>
						<p className='section-paragraph'>Track your baggage</p>
						<h2 className='section-title'>SITA worldtracer</h2>
						<p className='section-description'>
							Your airline has entered the details of your missing baggage into
							the SITA WorldTracer system. You can check the status of your
							delayed baggage and change the delivery and contact information if
							necessary.
						</p>

						<p className='section-description'>
							Note that not all airlines are members of the SITA WorldTracer
							network. For further questions please contact your airline.
						</p>

						<Button label='Track baggage' />
					</div>
				</div>
			</MotionSection>

			{/* Swissport */}
			<MotionSection as={'section'}>
				<div className='container min-h-[650px] d-between max-lg:flex-col-reverse max-lg:gap-5 mb-10 md:mb-20 max-lg:items-start'>
					<div className='w-full lg:max-w-lg'>
						<p className='section-paragraph'>Track your baggage</p>
						<h2 className='section-title'>Swissport</h2>
						<p className='section-description'>
							If your arriving airport (destination ariport) is Zurich (ZRH),
							Geneva (GVA), Basel (BSL), Berlin (BER), Rome (FCO), Edinburgh
							(EDI), Dublin (DUB), Las Vegas (LAS) or New York (JFK), you can
							check the status of your delayed baggage and change the delivery
							and contact information if necessary.
						</p>

						<p className='section-description'>
							Note that not all airlines are supported on our Swissport online
							tracker. For further questions please contact our local Baggage
							Service/Lost & Found office (within the first 5 days) or your
							airline (after 5 days).
						</p>

						<Button label='Track baggage' />
					</div>

					<div className='w-1/2 max-lg:w-full'>
						<img
							src='/assets/images/home/3.jpg'
							alt='Lost Property'
							className='size-full object-contain'
						/>
					</div>
				</div>
			</MotionSection>
		</>
	)
}

export default Home
