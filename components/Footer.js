import React from "react";

function Footer() {
  return (
    <>
      <style jsx>{`
        .logo h2 {
          color: #f35320;
          font-size: 50px;
          font-weight: bold;
        }
        .box img {
          height: 50px;
          margin: 10px;
        }
        .instagram-list {
          display: flex;
          flex-wrap: wrap;
        }
        .instagram-list li {
          list-style-type: none;
        }
        .single-footer-widget h3 {
          text-align: center;
          font-size: 22px;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }
        .single-footer-widget .quick-links {
          padding-left: 0;
          margin-bottom: 0;
          list-style-type: none;
        }
        .single-footer-widget .quick-links li {
          margin-bottom: 20px;
          color: #111111;
          text-align: center;
        }
        .single-footer-widget .quick-links li a {
          display: inline-block;
          color: #111111;
          font-weight: 500;
          text-decoration: none;
          font-size: 16px;
        }
        .single-footer-widget .footer-contact-info li span {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
          color: #111111;
          font-size: 18px;
        }
        .single-footer-widget .footer-contact-info {
          padding-left: 0;
          margin-bottom: 0;
          list-style-type: none;
          text-align: center;
        }
        .single-footer-widget .footer-contact-info li a {
          display: inline-block;
          color: #111111;
          font-weight: 500;
          font-size: 15px;
        }
        .footer-area {
          background-color: #f3f9fe;
          padding: 100px 0;
        }
        .copyright-area {
          padding-top: 30px;
          padding-bottom: 30px;
          background-color: #021a32;
        }
        .copyright-area .copyright-area-content p a {
          font-weight: 600;
          color: #f35320;
          margin-left: 7px;
          text-decoration: none;
        }
        .copyright-area .copyright-area-content p {
          color: #ffffff;
        }
        .copyright-area .copyright-area-content ul {
          display: flex;
        }
        .copyright-area .copyright-area-content ul li a {
          color: #ffffff;
          text-decoration: none;
        }
        .copyright-area .copyright-area-content ul {
          padding-left: 0;
          margin-bottom: 0;
          list-style-type: none;
          text-align: right;
        }
        .cpflex ul {
          justify-content: flex-end;
        }




//  media csssss




@media screen and (max-width: 768px) {

  .copyright-area{
    text-align:center;
  }
  .cpflex{
    display:flex;
    justify-content: center;
  }
  .footer-area{
    padding:25px 0;
  }

}





@media screen and (max-width: 425px) {
  .logo h2{
    text-align:center;
  }
  .logo p{
    text-align:center;
  }
  .copyright-area{
    text-align:center;
  }
  .cpflex{
    display:flex;
    justify-content: center;
  }
  .single-footer-widget p{
    text-align:center
  }
  .footer-area{
    padding:25px 0;
  }

}






@media screen and (max-width: 375px) {
  .logo h2{
    text-align:center;
  }
  .logo p{
    text-align:center;
  }
  .copyright-area{
    text-align:center;
  }
  .cpflex{
    display:flex;
    justify-content: center;
  }
  .single-footer-widget p{
    text-align:center
  }
  .footer-area{
    padding:25px 0;
  }

}






@media screen and (max-width: 320px) {
  .logo h2{
    text-align:center;
  }
  .logo p{
    text-align:center;
  }
  .copyright-area{
    text-align:center;
  }
  .cpflex{
    display:flex;
    justify-content: center;
  }
  .single-footer-widget p{
    text-align:center
  }
  .footer-area{
    padding:25px 0;
  }

}






      `}</style>
      <div className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <h2>Orgo</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt labore dolore magna aliqua.
                </p>
                
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Instagram</h3>

                <ul className="instagram-list">
                  <li>
                    <div className="box">
                      <img src="/instagram1.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram2.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram3.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram4.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram5.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram6.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram7.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram8.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>

                  <li>
                    <div className="box">
                      <img src="/instagram1.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a href="#" target="_blank" className="link-btn"></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bxs-phone"></i>
                    <span>Phone</span>
                    <a href="tel:407409202288">(+40) 74 0920 2288</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:hello@orgo.com">hello@orgo.com</a>
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    <span>Address</span>
                    175 5th Ave Premium Area, New York, NY 10010, United States
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <div className="row align-items-center  ">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright @ 2023 Orgo. All Rights Reserved by Maulik Patel
                </p>
              </div>

              <div className="col-lg-6 col-md-6 cpflex ">
                <ul>
                  <li>
                    <a href="terms-of-service.html">Terms &amp; Conditions</a>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
