import React from 'react';
import Banner from '../../components/home/Banner/Banner';
import TrustedSection from '../../components/home/TrustedSection/TrustedSection';
import FeaturedProducts from '../../components/home/FeaturedProducts/FeaturedProducts';
import Newsletter from '../../components/home/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedSection></TrustedSection>
            <FeaturedProducts></FeaturedProducts>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;