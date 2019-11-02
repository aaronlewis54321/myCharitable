import React, { Component } from 'react';
import HeroSection from '../components/landing/HeroSection';
import Footer from '../components/navigation/Footer';
import LandingContent from '../components/landing/LandingContent';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <HeroSection />
                <LandingContent />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;