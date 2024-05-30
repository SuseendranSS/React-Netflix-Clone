import React from 'react'
import './Sign.css';

export default function Sign() {
  return (
    <div>
      <body className='body'>
    <header class="showcase-s">
            <div class="logo">
                <img className = "img"src="https://i.ibb.co/r5krrdz/logo.png" alt = "logo"/>
            </div>

            <div class="showcase-content">
                <div class="formm">
                    <form>
                        <h1>Sign In</h1>
                        <div class="info">
                            <input class="email" type="email" placeholder="Email or phone number" /> <br/>
                            <input class="email" type="password" placeholder="Password" />
                        </div>
                        <div class="btn">
                        <a class="btn-primary" href="/home">Sign In</a>
                        </div>
                        <div class="help">
                            <div>
                                <input value="true" type="checkbox" /><label>Remember me</label>
                            </div>

                            <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                        
                        </div>

                    </form>
    
                </div>
                
                <div class="fcbk">
                    <a href="https://facebook.com">
                        <img className = "img"src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                      </a>
                    <p>Login with Facebook</p>
                </div>
                <div class="signup">
                    <p>New to Netflix ?</p>
                    <a href="https://www.netflix.com/dz-en/">Sign up now</a>
                </div>
                <div class="more">
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/sign-in">Learn more.</a> 
                    </p>
                </div>


            </div>

       
            <footer className='footer'>
                
                <div class="ftr-content">
                    <div class="contact">
                        <a href="/">Quesions? Contact us.</a>
                    </div>
                    <div class="ftr">
                        <a href="/">Gift Card Terms</a>
                        <a href="/">Terms of Use</a>
                        <a href="/">Privacy Statement</a>
                    </div>
                    <div class="select">
                        <select>
                            <option>English</option>
                            <option>العربية</option>
                            <option>Français</option>
                            
                        </select>
                    </div>
                </div>
               
            </footer>
       
    </header>


</body>
    </div>
  )
}