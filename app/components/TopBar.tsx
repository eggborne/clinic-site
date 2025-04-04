export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-content">
          <ul className="contact-info">
            <li>
              <i className="icon phone"></i>
              Call Us Today! <strong>480-681-0453</strong>
            </li>
            <li>
              <i className="icon location"></i>
              6520 North 7th Street, Phoenix, AZ 85014
            </li>
            <li>
              <i className="icon clock"></i>
              <strong>Hours of Operation:</strong> Monday - Friday: 9am to 9pm & Saturday: 9am to 1pm
            </li>
          </ul>
          <div className="program-info">
            <strong>PARTIAL HOSPITAL PROGRAM</strong> (PHP) & <strong>INTENSIVE OUT PATIENT</strong> (IOP) | DAYTIME & EVENING PROGRAMS AVAILABLE!
          </div>
        </div>
      </div>
    </div>
  );
}