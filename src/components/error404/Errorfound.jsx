import React from 'react';
import './Error.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import CmsDisplay from '../Header/CmsDisplay';
import { CmsFooter } from '../Footer/CmsFooter';
import 'bootstrap/dist/css/bootstrap.css';
import { TopHeader } from '../TopHeader/TopHeader';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export const Errorfound = () => {
    
  return (
    <>
    <TopHeader/>
      <CmsDisplay />
      <div className='main'>
      <div class="wrap-error">
  <div class="d-flex align-items-center h-100">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2 text-center text-white">
          <h1 class=""><span>4</span><span>0</span><span>4</span></h1>
          <h5 class="">Oops!🚀🚀🚀 Page not found</h5>
         
          <Link to="/" style={{textDecoration:"none"}}>
            <button className='btn-btn '> 
            Go home
            </button>
            </Link>
            
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      <CmsFooter/>
    </>
  );
};
