import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMenuoptins } from "../../Api/ApiFunctions"; // Import Bootstrap JS

const CmsDisplay = ({ aselectedLanguage }) => {
	// const lang = localStorage.getItem('selectedLanguage');
	const [selectedLanguage, setSelectedLanguage] = useState(1);
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMenuData() {
      try {
        const data = await getMenuoptins();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }

	fetchMenuData()
	const newSelectedLanguage = localStorage.getItem('selectedLanguage');
    setSelectedLanguage(newSelectedLanguage || 1); 
	
  }, []);

// 
// console.log("gsdkjfhksadfas",lang)
  return (
    <>
      <div className="city_top_navigation">
        <div className="container-fluid main-navbar-con">
          <div className="row">
            <div className="col-md-12">
              <div className="navigation main-menu">
                <ul>
                  <li className="nav-item">
                    <Link to="/" className="home">
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  {menuData.map((item) => (
                    <li className="nav-item" key={item.u_id}>
				
						
                      {parseInt(item.u_languagetype) === parseInt(selectedLanguage) && (
                        <>
                          {item.u_content_type === "2" && (
                            <Link
                              className="nav-link"
                              to={item.u_file}
                              target="_blank"
                              style={{ color: "white" }}
                            >
                              {item.u_menu_name}
                            </Link>
                          )}
                          {item.u_content_type === "3" && (
                            <Link
                              className="nav-link"
                              to={item.u_internal_link}
                              style={{ color: "white" }}
                            >
                              {item.u_menu_name}
                            </Link>
                          )}
                          {item.u_content_type === "4" && (
                            <Link
                              className="nav-link"
                              to={item.u_external_link}
                              target="_blank"
                              style={{ color: "white" }}
                            >
                              {item.u_menu_name}
                            </Link>
                          )}
                          {item.u_content_type === "1" && (
                            <Link
                              className="nav-link"
                              to={`/menu/${item.u_menu_url}`}
                              style={{ color: "white" }}
                            >
                              {item.u_menu_name}
                            </Link>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CmsDisplay;
