import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <style jsx>{`
        .main-banner-item {
          background-image: url('/main-banner-bg-1.jpg');
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          padding-top: 200px;
          padding-bottom: 200px;
          background-attachment: fixed;
        }
        .main-banner-content span {
          font-size: 18px;
          color: #f35320;
          font-weight: 500;
        }
        .main-banner-content h1 {
          font-size: 70px;
          color: #ffffff;
          margin-top: 15px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .main-banner-content p {
          color: #ffffff;
          margin-bottom: 0;
        }
        .default-btn {
          display: inline-block;
          padding: 12px 35px;
          background-color: #f99459;
          color: #ffffff;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          position: relative;
          z-index: 1;
          overflow: hidden;
          text-decoration: none;
        }
        .optional-btn {
          display: inline-block;
          padding: 12px 35px;
          background-color: #f35320;
          color: #ffffff;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          position: relative;
          z-index: 1;
          margin-left: 15px;
          overflow: hidden;
          text-decoration: none;
        }
        .main-banner-content {
          max-width: 680px;
        }
        .main-banner-content .banner-btn {
          margin-top: 30px;
        }

        .section-title {
          max-width: 680px;
          margin: 0 auto 45px;
          text-align: center;
        }
        .department-area {
          padding-bottom: 70px;
          padding-top: 120px;
        }
        .section-title h2 {
          font-size: 40px;
          margin-bottom: 15px;
          color: #111111;

          font-weight: bold;
        }
        .section-title p {
          margin-bottom: 0;
          margin-bottom: 15px;
          line-height: 1.8;
          color: #6b6b84;
          font-weight: 500;

          font-size: 16px;
        }
        .single-department .department-image img {
          -webkit-transition: 0.5s;
          transition: 0.5s;
          max-width: 100%;
          height: auto;
          display: inline-block;
        }
        .content h3 {
          text-decoration: none;
          text-align: center;
        }
        .content h3 a {
          text-decoration: none;
          color: #111111;
        }

        //  media csssss

        @media screen and (max-width: 768px) {
          .main-banner-item {
            padding: 200px 0;
            text-align:start;
          }
          .section-title{
            text-align:start;
          }
          .main-banner-content h1{
            font-size:60px
          }
        }



        @media screen and (max-width: 425px) {
          .main-banner-item {
            padding: 175px 0;
            text-align:start;
          }
          .section-title{
            text-align:start;
          }
          .main-banner-content h1{
            font-size:60px
          }
        }



        @media screen and (max-width: 375px) {
          .main-banner-item {
            padding: 125px 0;
            text-align:start;
          }
          .section-title{
            text-align:start;
          }
          .main-banner-content h1{
            font-size:60px
          }
        }


        @media screen and (max-width: 320px) {
          .main-banner-item {
            padding: 100px 0;
            text-align:start;
          }
          .section-title{
            text-align:start;
          }
          .main-banner-content h1{
            font-size:60px
          }
        }
      `}</style>

      <div>
        <div className="main-banner-item">
          <div className="container">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>Take Natural Taste From Our Shop</span>
                    <h1>Organic Food Is Good For Health</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua quis ipsum suspendisse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="department-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Organic Shop of Department</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                ipsum suspendisse
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-1.jpg" alt="image" />

                    <div className="content">
                      <h3>Fresh Milk</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-2.jpg" alt="image" />

                    <div className="content">
                      <h3>Fresh Beef</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-3.jpg" alt="image" />

                    <div className="content">
                      <h3>Chicken Meat</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-4.jpg" alt="image" />

                    <div className="content">
                      <h3>Fresh Fruits</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-5.jpg" alt="image" />

                    <div className="content">
                      <h3>Fresh Fish</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-department">
                  <div className="department-image">
                    <img src="/department-6.jpg" alt="image" />

                    <div className="content">
                      <h3>Vegetables</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br />
      <br />
    </>
  );
}
