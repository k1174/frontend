// import FeaturedEvent from '../components/FeaturedEvent'
import FeatureSection from '../components/FeatureSection'
import Hero from '../components/Hero'
import HomePagePastEvents from '../components/HomePagePastEvents'
import JobListings from '../components/JobListings'
import Landing from '../components/Landing'
import Steps from '../components/Steps'
import ViewAllJobs from '../components/ViewAllJobs'
const Home = () => {
    return (
        <>
            <Hero />
            {/* <HomeCards /> */}
            <JobListings />
            <ViewAllJobs />
            <HomePagePastEvents />
            <Landing />
            {/* <FeaturedEvent /> */}
            <Steps />
            <FeatureSection />
        </>
    )
}

export default Home;