import './login.css';
import facebookIcon from "./assets/facebook.jpg";
import microsoftApp from "./assets/Microsoft_app.jpeg";
import playStore from "./assets/play_store.jpeg";

function Login() {
  const footerLinks = [
    "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy",
    "Terms", "Top Accounts", "Hashtags", "Locations"
  ];

  return (
    <div className="main-page">
      <div className="login-container">

        {/* Phone image (large screens only via CSS) */}
        <div className="login-image">
          <img
            src="/diya.png"
            alt="Instagram phones"
          />
        </div>

        {/* Login section */}
        <div className="login-form-container">

          <div className="login-form-box">
            {/* Instagram image logo */}
            <img
              className="instagram-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/256px-Instagram_logo.svg.png"
              alt="Instagram"
            />

            <form className="login-form">
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <button type="submit">Log In</button>
            </form>

            {/* OR divider */}
            <div className="or-divider">
              <div className="line"></div>
              <div className="or-text">OR</div>
              <div className="line"></div>
            </div>
            {/*Facebook */}
          <div className="facebook-login">
              <button type="button">
              <img src={facebookIcon} className="fb-icon" alt="Facebook" />
              Log in with Facebook
              </button>
          </div>

            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </div>

          {/* Sign up */}
          <div className="signup-box">
            <p>
              Don't have an account? <a href="/">Sign up</a>
            </p>
          </div>

          {/* Get the app */}
          <div className="get-app">
            <p>Get the app.</p>
            <div className="store-buttons">
              <img src={playStore} alt="Play Store" />
              <img src={microsoftApp} alt="Microsoft Store"  />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="instagram-footer">
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a key={index} href="/">{link}</a>
          ))}
        </div>
        <div className="footer-copy">
          © 2026 Instagram from Meta
        </div>
      </footer>
    </div>
  );
}

export default Login;