import React from 'react';
import SecondNavbar from '../SecondNavbar/SecondNavbar';

const Home = () => {
    return (
        <div>
           
            <div className='w-100'>
                <img src="https://blog.iuiga.com/wp-content/uploads/2019/01/radek-grzybowski-66457-unsplash.jpg" alt="banner" className='img-fluid  h-50'/>
            </div>
            <SecondNavbar></SecondNavbar>
        </div>
    );
};

export default Home;