import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div>
          <ul className="sidebar-pages">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/explore">Explore the Roman Empire</a>
            </li>
            <li>
              <a href="/welcome">Talk to fellow Romans</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <ul className="social-media">
          <li>
            <a
              href="https://www.facebook.com/rajat.satashiya.9"
              target="blank"
              className="fb"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/garlicvadapav"
              target="blank"
              className="twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/garlicvadapav/"
              target="blank"
              className="insta"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://whitenightdot3.blogspot.com/"
              target="blank"
              className="blog"
            >
              <i className="fab fa-blogger"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
