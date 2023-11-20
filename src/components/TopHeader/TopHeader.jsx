import React, { useState, useEffect } from 'react'

export const TopHeader = ({ selectedLanguage, handleLanguageChange }) => {
    const [selectedLanguageA, setSelectedLanguageA] = useState(1);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');


    useEffect(() => {


        const newSelectedLanguage = localStorage.getItem('selectedLanguage');
        setSelectedLanguageA(newSelectedLanguage || 1);
    }, []);

    const languages = {
        1: 'English',
        2: 'हिंदी',
        // Add more languages as needed
    };


    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const dateOptions = {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            };

            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };

            const formattedDate = now.toLocaleDateString(undefined, dateOptions);
            const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

            setCurrentDate(formattedDate);
            setCurrentTime(formattedTime);
        };

        // Update the date and time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Call it once to initialize the values
        updateDateTime();

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    const handleSkipToMainContent = () => {
        // Use JavaScript to scroll to the target element with the id "rgt-three"
        const targetElement = document.getElementById('rgt-three');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            {/* <div>
                <div >
                    <section class="top-b-section">
                        <div class="container-fluid nav-con">
                            <div class="top-bar-section">
                                <div class="top-bar-lft">
                                    <p class="bdr-rgt">11-Oct-2023 </p>
                                    <p class="bdr-rgt">5:01:54 pm</p>
                                    <p class="bdr-rgt">Old Website</p>
                                </div>
                                <div class="top-bar-rgt">
                                    <div class="bar1 bar-c">
                                        <form id="search-form" action="https://cea.nic.in/" method="get">
                                            <div class="search-box">
                                                <input id="myInputhidden" type="hidden" name="lang" placeholder="Search...."
                                                    class="round" value="en" />
                                                <input id="myInput" type="search" name="s" placeholder="Search...."
                                                    class="round" />


                                                <button type="submit" class="corner" aria-label="Search...." title="Search....">
                                                    <i class="fa fa-search " aria-hidden="true"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="bar2 bar-c">
                                        <p><a href="#">Screen Reader Access</a></p>
                                    </div>
                                    <div class="bar3 bar-c">
                                        <p><a href="#demos">Skip to main content</a></p>
                                    </div>
                                    <div class="bar4 bar-c">
                                        <ul>
                                            <li>
                                                <a href="#" class="white-contrast dash_link_nt" id="dark-mode-button"
                                                    aria-pressed="false" title="Black" role="button">
                                                    <i class="fa fa-square" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="black-contrast dash_link_nt" id="light-mode-button"
                                                    aria-pressed="true" title="white" role="button">
                                                    <i class="fa fa-square" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bar5 bar-c">
                                        <ul>
                                            <li>
                                                <a href="#" class="topbar-icon" title="Sitemap">
                                                    <i class="fa fa-sitemap" aria-hidden="true"></i>
                                                </a>
                                            </li>

                                            <li class="ftsz-70p ml-10">
                                                <a onclick="smallFontSize()" href="javascript:void(0);"
                                                    class="dash_link_nt">A<sup class="topbar-sup-txt">-</sup></a>
                                            </li>
                                            <li class="ftsz-90p">
                                                <a onclick="normalFontSize()" href="javascript:void(0);"
                                                    class="dash_link_nt">A</a>
                                            </li>
                                            <li class="ftsz-110p">
                                                <a onclick="largeFontSize()" href="javascript:void(0);"
                                                    class="dash_link_nt">A<sup class="topbar-sup-txt">+</sup></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bar6 bar-c">
                                        <div class="language-box">
                                            <select
                                                id="languageDropdown"
                                                value={selectedLanguage}
                                                onChange={handleLanguageChange}
                                            >
                                                {Object.keys(languages).map((langCode) => (
                                                    <option key={langCode} value={langCode}>
                                                        {languages[langCode]}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>
                <div class="top-header-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="head-logo">
                                    <h2 class="logo">
                                        <a href="home.html" title="Home" rel="home" class="header__logo" id="logo">
                                            <img class="national_emblem" src="assets/images/emblem-dark.png" alt="national emblem" />
                                            <em><span>मंत्रालय / विभाग नाम</span>
                                                <span> Western Regional Power Committee </span>
                                            </em>
                                        </a>
                                    </h2>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="head-right">
                                    <div class="rgt-one">
                                        <img src="assets/images/G20-logo.png" alt="" />
                                    </div>
                                    <div class="rgt-two">
                                        <img src="assets/images/swach-bharat.png" alt="" />
                                    </div>
                                    <div class="rgt-three">




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            {parseInt(selectedLanguageA) === 1 ? (
                <div>
                    <div>
                        <div >
                            <section class="top-b-section">
                                <div class="container nav-con">
                                    <div class="top-bar-section">
                                        <div class="top-bar-lft">
                                            <p className="bdr-rgt">{currentDate}</p>
                                            <p className="bdr-rgt">{currentTime}</p>
                                            <p class="bdr-rgt">Old Website</p>
                                        </div>
                                        <div class="top-bar-rgt">
                                            <div class="bar1 bar-c">
                                                <form id="search-form" action="https://cea.nic.in/" method="get">
                                                    <div class="search-box">
                                                        <input id="myInputhidden" type="hidden" name="lang" placeholder="Search...."
                                                            class="round" value="en" />
                                                        <input id="myInput" type="search" name="s" placeholder="Search...."
                                                            class="round" />


                                                        <button type="submit" class="corner" aria-label="Search...." title="Search....">
                                                            <i class="fa fa-search " aria-hidden="true"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="bar2 bar-c">
                                                <p><a href="#">Screen Reader Access</a></p>
                                            </div>
                                            <div class="bar3 bar-c">
                                                <p><a href="#demos">Skip to main content</a></p>
                                            </div>
                                            <div class="bar4 bar-c">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="white-contrast dash_link_nt" id="dark-mode-button"
                                                            aria-pressed="false" title="Black" role="button">
                                                            <i class="fa fa-square" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="black-contrast dash_link_nt" id="light-mode-button"
                                                            aria-pressed="true" title="white" role="button">
                                                            <i class="fa fa-square" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bar5 bar-c">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="topbar-icon" title="Sitemap">
                                                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                                                        </a>
                                                    </li>

                                                    <li class="ftsz-70p ml-10">
                                                        <a onclick="smallFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A<sup class="topbar-sup-txt">-</sup></a>
                                                    </li>
                                                    <li class="ftsz-90p">
                                                        <a onclick="normalFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A</a>
                                                    </li>
                                                    <li class="ftsz-110p">
                                                        <a onclick="largeFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A<sup class="topbar-sup-txt">+</sup></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bar6 bar-c">
                                                <div class="language-box">
                                                    <select
                                                        id="languageDropdown"
                                                        value={selectedLanguage}
                                                        onChange={handleLanguageChange}
                                                    >
                                                        {Object.keys(languages).map((langCode) => (
                                                            <option key={langCode} value={langCode}>
                                                                {languages[langCode]}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>
                        <div class="top-header-sec">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="head-logo">
                                            <h2 class="logo">
                                                <a href="home.html" title="Home" rel="home" class="header__logo" id="logo">
                                                    <img class="national_emblem" src="assets/images/emblem-dark.png" alt="national emblem" />
                                                    <em><span>मंत्रालय / विभाग नाम</span>
                                                        <span> Western Regional Power Committee </span>
                                                    </em>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="head-right">
                                            <div class="rgt-one">
                                                <img src="assets/images/G20-logo.png" alt="" />
                                            </div>
                                            <div class="rgt-two">
                                                <img src="assets/images/swach-bharat.png" alt="" />
                                            </div>
                                            <div class="rgt-three">




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <div >
                            <section class="top-b-section">
                                <div class="container-fluid nav-con">
                                    <div class="top-bar-section">
                                        <div class="top-bar-lft">
                                            <p className="bdr-rgt">{currentDate}</p>
                                            <p className="bdr-rgt">{currentTime}</p>
                                            <p class="bdr-rgt">
                                                पुरानी वेबसाइट  </p>
                                        </div>
                                        <div class="top-bar-rgt">
                                            <div class="bar1 bar-c">
                                                <form id="search-form" action="https://cea.nic.in/" method="get">
                                                    <div class="search-box">
                                                        <input id="myInputhidden" type="hidden" name="lang" placeholder="Search...."
                                                            class="round" value="en" />
                                                        <input id="myInput" type="search" name="s" placeholder="
खोज...."
                                                            class="round" />


                                                        <button type="submit" class="corner" aria-label="Search...." title="
खोज....">
                                                            <i class="fa fa-search " aria-hidden="true"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="bar2 bar-c">
                                                <p><a href="#">
                                                    स्क्रीन रीडर एक्सेस</a></p>
                                            </div>
                                            <div class="bar3 bar-c">
                                                <p><a href="#rgt-three" onClick={handleSkipToMainContent}>
                                                    मुख्य विषयवस्तु में जाएं</a></p>
                                            </div>
                                            <div class="bar4 bar-c">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="white-contrast dash_link_nt" id="dark-mode-button"
                                                            aria-pressed="false" title="Black" role="button">
                                                            <i class="fa fa-square" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="black-contrast dash_link_nt" id="light-mode-button"
                                                            aria-pressed="true" title="white" role="button">
                                                            <i class="fa fa-square" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bar5 bar-c">
                                                <ul>
                                                    <li>
                                                        <a href="#" class="topbar-icon" title="Sitemap">
                                                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                                                        </a>
                                                    </li>

                                                    <li class="ftsz-70p ml-10">
                                                        <a onclick="smallFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A<sup class="topbar-sup-txt">-</sup></a>
                                                    </li>
                                                    <li class="ftsz-90p">
                                                        <a onclick="normalFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A</a>
                                                    </li>
                                                    <li class="ftsz-110p">
                                                        <a onclick="largeFontSize()" href="javascript:void(0);"
                                                            class="dash_link_nt">A<sup class="topbar-sup-txt">+</sup></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="bar6 bar-c">
                                                <div class="language-box">
                                                    <select
                                                        id="languageDropdown"
                                                        value={selectedLanguage}
                                                        onChange={handleLanguageChange}
                                                    >
                                                        {Object.keys(languages).map((langCode) => (
                                                            <option key={langCode} value={langCode}>
                                                                {languages[langCode]}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>
                        <div class="top-header-sec">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="head-logo">
                                            <h2 class="logo">
                                                <a href="home.html" title="Home" rel="home" class="header__logo" id="logo">
                                                    <img class="national_emblem" src="assets/images/emblem-dark.png" alt="national emblem" />
                                                    <em><span>मंत्रालय / विभाग नाम</span>
                                                        <span> Western Regional Power Committee 11</span>
                                                    </em>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="head-right">
                                            <div class="rgt-one">
                                                <img src="assets/images/G20-logo.png" alt="" />
                                            </div>
                                            <div class="rgt-two">
                                                <img src="assets/images/swach-bharat.png" alt="" />
                                            </div>
                                            <div class="rgt-three">




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
