import { Link } from "react-router";
import logoWhite from "../assets/wd-recovery-and-wellness-center-logo-white.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="container">
          <div className="footer-top">
            <div className="footer-info-box">
              <h4>Have a question? Call us today!</h4>
              <h2>480-681-0453</h2>
            </div>
            <div className="footer-info-box">
              <h4>Need support? Send us a comment</h4>
              <h2><a href="mailto:info@wdrecoverycenters.com">info@wdrecoverycenters.com</a></h2>
            </div>
            <div className="footer-info-box">
              <h2>Mon-Fri: 9am-9pm<br />Sat: 9am-1pm</h2>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-column">
              <img src={logoWhite} alt="WD Recovery & Wellness Center" className="footer-logo" />
              <p>
                WD Recovery & Wellness Center has provided high quality clinical programs for over 20 years.
                It is our mission to help save the lives of those suffering from different disorders. Our
                primary purpose is to treat the dysfunctional behavior in a supportive environment.
              </p>
            </div>
            <div className="footer-column">
              <h3 className="widget-title">We can help!</h3>
              <ul className="contact-list">
                <li className="phone">480-681-0453</li>
                <li className="email"><a href="mailto:info@wdrecoverycenters.com">info@wdrecoverycenters.com</a></li>
                <li className="address">6520 North 7th Street, Phoenix, AZ 85014</li>
                <li className="hours">Hours of Operation: Monday - Friday: 9am to 9pm & Saturday: 9am to 1pm</li>
              </ul>
              <div className="footer-buttons">
                <Link to="/privacy-policy" className="footer-button">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="footer-button">Terms and Conditions</Link>
                <Link to="/hipaa-compliance-notice" className="footer-button">HIPAA Compliance Notice</Link>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="widget-title">Latest News</h3>
              <ul className="recent-posts">
                <li>
                  <Link to="/blog/diabetes-eating-disorders">Diabetes & Eating Disorders</Link>
                  <span className="post-date">February 9, 2023</span>
                </li>
                <li>
                  <Link to="/blog/creative-expression">Creative Expression</Link>
                  <span className="post-date">February 9, 2023</span>
                </li>
                <li>
                  <Link to="/blog/alcohol-friend">Alcohol Friend</Link>
                  <span className="post-date">February 9, 2023</span>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="widget-title">Staff & Patient Resources</h3>
              <ul className="resources-list">
                <li><a href="https://crm.bestnotes.com/portal/wdrc" target="_blank" rel="noopener noreferrer">BEST NOTES</a></li>
                <li><a href="https://performanceofcare.com/login/" target="_blank" rel="noopener noreferrer">OFFICE</a></li>
                <li><a href="https://wdrecoverycenters.com:2096/" target="_blank" rel="noopener noreferrer">EMAIL</a></li>
                <li><a href="https://performanceofcare.com/attendance/?ix=1&rd=13a869w639" target="_blank" rel="noopener noreferrer">ATTENDANCE</a></li>
                <li><a href="https://performanceofcare.com/backofficepatient/journal.php" target="_blank" rel="noopener noreferrer">JOURNALING</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="disclaimer">
            <strong>Disclaimer:</strong> The information provided on this website is for educational and informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition or treatment.
            <br /><br />
            <strong>Insurance and Payment Information:</strong> Insurance acceptance and coverage are subject to verification. Payment arrangements and costs may vary based on individual circumstances and the specifics of your treatment plan.
            <br /><br />
            <span>Copyright © 2025 <Link to="/">WD Recovery & Wellness Center</Link>. All Rights Reserved | Delivering High-Quality Clinical Programs by Treating Dysfunctional Behavior in a Supportive Environment.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}