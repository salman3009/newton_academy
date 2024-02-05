import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


axios.interceptors.request.use(async (config) => {
  config.headers['projectid'] = "f104bi07c490";
  return config;
})

function App() {

  const [getList, setList] = useState([]);

  const listOfDetails = async () => {
    axios.get('https://academics.newtonschool.co/api/v1/music/song').then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }).catch((error) => {
      console.log(error);
    })

  }
  useEffect(() => {
    listOfDetails();
  }, [])

  return (
    <section className="main-section">
      <div className="left-section">

      </div>
      <div className="right-section">
        <nav>
          <a href="/" className="arrow">
            <div>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </a>
          <ul class="nav-ul">
            <li class="nav-li">
              <a href="#">Signup</a>
            </li>
            <li class="nav-li">
              <a href="#">Log</a>
            </li>
          </ul>
        </nav>
        <div className="main-container">
          <div className="cards">
            {
              getList.map((obj, index) => {
                return (
                  <section key={index} className="box">
                    <img src={obj.thumbnail} />
                    <div class="heading">{obj.title}</div>
                    <p class="sub-heading-one">{obj.artist[0].description}</p>
                    <p class="sub-heading-two">{obj.artist[0].description}</p>
                  </section>
                )
              })
            }
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
          <ul>
              <li>Company</li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
            <ul>
              <li>Communities</li>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
            <ul>
              <li>Useful links</li>
              <li>Support</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
          <div className="footer-right">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          </div>
           
        </div>
      </div>
    </section>
  );
}

export default App;
