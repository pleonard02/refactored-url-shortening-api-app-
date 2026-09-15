import { Link } from "react-router-dom";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

function Footer() {
    return (
        <footer>
        <section className="boost-container">
            <h3>Boost your links today</h3>

            <button type="button" id="start-btn">
            Get Started
            </button>
        </section>

        <section
            className="links"
            id="resources"
            aria-label="Footer navigation"
        >
            <h2>Shortly</h2>

            <div className="features-section">
            <h3>Features</h3>

            <p>
                <Link to="/link-shortening">Link Shortening</Link>
            </p>

            <p>
                <Link to="/branded-links">Branded Links</Link>
            </p>

            <p>
                <Link to="/analytics">Analytics</Link>
            </p>
            </div>

            <div className="resources-section">
            <h3>Resources</h3>

            <p>
                <Link to="/blog">Blog</Link>
            </p>

            <p>
                <Link to="/developers">Developers</Link>
            </p>

            <p>
                <Link to="/support">Support</Link>
            </p>
            </div>

            <div className="company-section">
            <h3>Company</h3>

            <p>
                <Link to="/about">About</Link>
            </p>

            <p>
                <Link to="/our-team">Our Team</Link>
            </p>

            <p>
                <Link to="/careers">Careers</Link>
            </p>

            <p>
                <Link to="/contact">Contact</Link>
            </p>
            </div>

            <div
            className="social-media-links"
            aria-label="Social media"
            >
            <a href="#facebook" aria-label="Facebook">
                <img src={facebookIcon} alt="" aria-hidden="true" />
            </a>

            <a href="#twitter" aria-label="Twitter">
                <img src={twitterIcon} alt="" aria-hidden="true" />
            </a>

            <a href="#pinterest" aria-label="Pinterest">
                <img src={pinterestIcon} alt="" aria-hidden="true" />
            </a>

            <a href="#instagram" aria-label="Instagram">
                <img src={instagramIcon} alt="" aria-hidden="true" />
            </a>
            </div>
        </section>
        </footer>
    );
}

export default Footer;