import React, { useState, useEffect } from 'react'
import CmsDisplay from '../components/Header/CmsDisplay'
import { Banner } from '../components/Banner/Banner';


import { CmsFooter } from '../components/Footer/CmsFooter';
import { FooterDetails } from '../components/Footer/FooterDetails';
 import { WhatsNew } from '../components/whatsNew/CmswhatsNew';
import 'bootstrap/dist/css/bootstrap.css';
import { TopHeader } from '../components/TopHeader/TopHeader';
import { menudata } from '../data/Menu'
import { RootHtmlContent } from '../components/RootHtmlContent/RootHtmlContent';
import ScrolltoTop from '../components/ScrollToTop/ScrolltoTop';
import { Services } from '../components/Services/Services';
import  Slider  from '../components/Slider/Slider';
import { Link, useNavigate } from 'react-router-dom';

export const Home = (prop) => {
    const navigate = useNavigate()

    const [selectedLanguage, setSelectedLanguage] = useState(1); // Default to English (1)

    // Define your 'languages' object here...

    useEffect(() => {
        // Get the selected language from localStorage on component mount
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
    }, []);

    const handleLanguageChange = (event) => {
        const newSelectedLanguage = event.target.value;

        setSelectedLanguage(newSelectedLanguage);

        // Store the selected language in localStorage
        localStorage.setItem('selectedLanguage', newSelectedLanguage);
        

        // Reload the window after a brief delay to allow saving the selected language
          setTimeout(() => {
            // alert(`Language changed to ${newSelectedLanguage}`);
            if (newSelectedLanguage==1) {
                alert('Language changed to :English')
            
            } else if (newSelectedLanguage==2) {
                alert('Language changed to :Hindi')
            } else {
                
            }
           
              window.location.reload();
            
              navigate('/')
          }, 500);
    };

    return (
        <div>
            <div  >


                <div >
                     <TopHeader selectedLanguage={selectedLanguage}
                        handleLanguageChange={handleLanguageChange} />
                    <CmsDisplay selectedLanguage={selectedLanguage} />
                </div>

                <div >
                    <div >
                        <Banner />   
                    </div>
                </div>
                <div>
                
                </div>
                <div >
                    <RootHtmlContent />
                </div>
                <div >
                    <Services />
                </div>
                <div >
                    <Slider />
                </div>
                <div >
                    <div >
                        <CmsFooter />
                        <ScrolltoTop />
                    </div>
                </div>
            </div>


        </div>
    )
}
