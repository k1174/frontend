function Hero() {

  // const handleGetStarted = () => {
  //   window.scrollTo({
  //     top: 500, // Scroll to 100 pixels down
  //     behavior: 'smooth' // Smooth scroll
  //   })
  // }

  return (
    <>
      {/* <!-- Hero --> */}
      <section className="w-full h-[600px] py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container mx-auto px-4 md:px-36">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center md:text-left space-y-6 md:-translate-y-24 md:translate-x-20">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                Event Scheduling Simplified
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Streamline your event planning process with our comprehensive platform. From creation to execution, we&apos;ve got you covered.
              </p>
              <div className="space-x-4 mt-4 space-y-4">
                {/* <button onClick={handleGetStarted} className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
                  Get Started!
                </button> */}
                <button className="px-8 py-3 text-blue-600 bg-white border border-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
                  <a href='/addjob'>  Schedule Event</a>
                </button>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center md:-translate-y-24">
              <img
                src="https://img.freepik.com/free-vector/online-booking-services-abstract-concept-illustration_335657-3908.jpg?t=st=1729282787~exp=1729286387~hmac=df0e9872ed39a3a0f07afd925b10e4000aeff2a52646ac1d85bc7411e7c531f3&w=740" // Replace with your image URL
                alt="Event Management"
                className="w-full max-w-md h-auto " // Adjusted size and styling
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero;