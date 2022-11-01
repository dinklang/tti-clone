import React from 'react';
import BackgroundSlider from './BackgroundSlider';
import '../Styles/Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <BackgroundSlider></BackgroundSlider>
            </div>
        )
    }
}

export default Header;