import React, { useEffect } from "react";

 import 'https://code.jquery.com/jquery-3.4.1.min.js';
//  import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Banner = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
  return (
    <div>
			<div class="city_main_banner">
				<div class="main-banner-slider">
      <h2>slider </h2>
        <Slider {...settings}>
          <div>
          <figure class="overlay">
							<div class="video-container">
								<video  autoplay="" muted="" loop="">
									 <source src="images/wrpc33.mp4" type="video/mp4"/></video>
							</div>
							<div class="banner_text">
								<div class="small_text animated">Welcome to</div>
								<div class="medium_text animated">Western Regional Power</div>
								<div class="large_text animated"><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
								<div class="banner_btn">
									<a class="theam_btn animated" href="#">Read More</a>
									<a class="theam_btn animated" href="#">Explore Now</a>
								</div>
								<div class="banner_search_form">
									<label>Search Here</label>
									<div class="banner_search_field animated">
										<input type="text" placeholder="What  do you want to do"/>
										<a href="#"><i class="fa fa-search"></i></a>
									</div>
								</div>
							</div>
						</figure>
          </div>
          <div>
          <figure class="overlay">
							<div class="video-container">
								<video  autoplay="" muted="" loop="">
									 <source src="images/wrpc22.mp4" type="video/mp4"/></video>
							</div>
							<div class="banner_text">
								<div class="small_text animated">Welcome to</div>
								<div class="medium_text animated">Western Regional Power</div>
								<div class="large_text animated"> Committee</div>
								<div class="banner_btn">
									<a class="theam_btn animated" href="#">Read More</a>
									<a class="theam_btn animated" href="#">Explore Now</a>
								</div>
								<div class="banner_search_form">
									<label>Search Here</label>
									<div class="banner_search_field animated">
										<input type="text" placeholder="What  do you want to do"/>
										<a href="#"><i class="fa fa-search"></i></a>
									</div>
								</div>
							</div>
						</figure>
          </div>
          <div>
          <figure class="overlay">
							<div class="video-container">
								<video autoplay="" muted="" loop="">
									 <source src="images/wrpc.mp4" type="video/mp4"/></video>
							</div>
							<div class="banner_text">
								<div class="small_text animated">Welcome to</div>
								<div class="medium_text animated">Western Regional Power</div>
								<div class="large_text animated">Committee</div>
								<div class="banner_btn">
									<a class="theam_btn animated" href="#">Read More</a>
									<a class="theam_btn animated" href="#">Explore Now</a>
								</div>
								<div class="banner_search_form">
									<label>Search Here</label>
									<div class="banner_search_field animated">
										<input type="text" placeholder="What  do you want to do"/>
										<a href="#"><i class="fa fa-search"></i></a>
									</div>
								</div>
							</div>
						</figure>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  );
}
