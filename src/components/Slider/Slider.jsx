import React,{useState,useEffect} from 'react';
import { getSliderImg,getBannerImg } from "../../Api/ApiFunctions"; //

export const Slider = () => {
	const [extractedNumber, setExtractedNumber] = useState(null);
	const [menudata, setMenuData] = useState([])

	useEffect(() => {
  
	  async function fetchMenuData() {
		try {
		  const data = await getSliderImg();
		  setMenuData(data);
		} catch (error) {
		  console.error('Error fetching menu data:', error);
		}
  
	  }
  
	  fetchMenuData();
	}, []);
	console.log( "slider",menudata);
  return (
<>
<div class="main-sec2">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="swiper-container swiper-container-horizontal swiper-container-free-mode" id="logo-sliders">
          <div class="swiper-wrapper logo-swiper-wrapper slide-smooth-timing" 
          style={{ transitionDuration: "5000ms", transform: "translate3d(-2620px, 0px, 0px)" }}>
            {menudata.map((i) => (
              <div key={i.u_id} class="swiper-slide logo-slider-bg-trans logo-slide swiper-slide-duplicate"
               data-swiper-slide-index="4" style={{ width: "148.75px", marginRight: "15px" }}>
                <a href={i.u_content} title="Right to Information">
                  <img src={i.imgpath} class="img-fluid logo-img" alt="Right to Information" loading="lazy" />
                </a>
              </div>
            ))}
          </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}
