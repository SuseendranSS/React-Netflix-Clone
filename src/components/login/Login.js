import React, { useEffect } from 'react';
import './Login.css';

function loadFontAwesome() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
  link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
  link.crossOrigin = 'anonymous';
  link.referrerPolicy = 'no-referrer';
  document.head.appendChild(link);
}

function toggleFAQItem(event) {
  console.log("clicked");
  const item = event.currentTarget.closest('li');
  item.classList.toggle('show');
}

function Login() {
  useEffect(() => {
    loadFontAwesome();
  }, []);
  
  return (
    <div className="outter-container">
      {/* header */}
      <header className="header-home">
        <nav className="logo-home">
          <img src="/logo.png" alt="Netflix" />
          <a href="/sign-in" className="login-btn" >Sign In</a>
        </nav>

        <div className="inner-container">
          <div className="inner-title">
            <h1>Unlimited movies, TV shows, and more.</h1>
          </div>
          <div className="inner-text">
            <p>Watch anywhere. Cancel anytime.</p>
          </div>

          <div className="email-form">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="get-started">
              <input type="text" name="" id="" placeholder="Email address" />
              <a href="/sign-in" className="login-btn-lg">
                Get started <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </header>
      {/* showcase1 */}
      <section className="showcase">
        <div className="showcase-container case1">
          <div className="inner-container">
            <div className="inner-title">
              <h1>Enjoy on your TV.</h1>
            </div>
            <div className="inner-text">
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="showcase-img">
            <img src="tv.png" alt="" />
            <video className="showcase-animation" autoPlay playsInline muted loop>
              <source src="video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      {/* showcase2 */}
      <section className="showcase">
        <div className="showcase-container case2">
          <div className="showcase-img">
            <img src="mobile-0819.jpg" alt="" />
            <div className="downloading">
              <img src="boxshot.png" alt="" />
              <div className="download-text">
                <h1>Stranger Things</h1>
                <p>Downloading...</p>
              </div>
            </div>
          </div>
          <div className="inner-container">
            <div className="inner-title">
              <h1>Download your shows to watch offline.</h1>
            </div>
            <div className="inner-text">
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* showcase3 */}
      <section className="showcase">
        <div className="showcase-container case3">
          <div className="inner-container">
            <div className="inner-title">
              <h1>Watch everywhere.</h1>
            </div>
            <div className="inner-text">
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </p>
            </div>
          </div>
          <div className="showcase-img">
            <img src="device-pile.png" alt="" />
            <video className="showcase-animation" autoPlay playsInline muted loop>
              <source src="video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      {/* faq list */}
      <section className="faq">
        <div className="inner-container">
          <div className="inner-title">
            <h1>Frequently Asked Questions</h1>
          </div>

          <ul id = "unorder">
            <li>
              <h2>What is Netflix <i className="fa-solid fa-plus" onClick={toggleFAQItem}></i></h2>
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. <br />You can watch
                as much as you want, whenever you want without a single
                commercial – all for one low monthly price. There's always
                something new to discover and new TV shows and movies are added
                every week!
              </p>
            </li>
            <li>
              <h2>How much does NetFlix cost? <i className="fa-solid fa-plus" onClick={toggleFAQItem}></i></h2>
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. <br />
                Plans range from TWD270 to TWD390 a month. No extra costs, no
                contracts.
              </p>
            </li>
            <li>
              <h2>Where can I watch?<i className="fa-solid fa-plus" onClick={toggleFAQItem}></i></h2>
              <p>
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles. <br />You can also download your favorite shows
                with the iOS, Android, or Windows 10 app. Use downloads to watch
                while you're on the go and without an internet connection. Take
                Netflix with you anywhere.
              </p>
            </li>
            <li>
              <h2>How do I cancel?<i className="fa-solid fa-plus" onClick={toggleFAQItem}></i></h2>
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </li>
            <li>
              <h2>What can I watch on Netflix?<i className="fa-solid fa-plus" onClick={toggleFAQItem}></i></h2>
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </li>
          </ul>

          <div className="email-form">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="get-started">
              <input type="text" name="" id="" placeholder="Email address" />
              <a href="log in/index.html" className="login-btn-lg">
                Get started <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer>
        <p>Questions? Contact us.</p>
        <div className="links">
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Netflix Originals</li>
          </ul>
          <div className="language" id="language-btn">
            <i className="fas fa-globe"></i> English
            <i className="fas fa-sort-down lg"></i>
            <div className="dropdown-list">
              <ul className="" id="language-dropdown">
                <li>中文</li>
                <li>English</li>
              </ul>
            </div>
          </div>
          <p>NetFlix India</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;