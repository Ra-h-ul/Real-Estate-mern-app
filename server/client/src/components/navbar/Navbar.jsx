import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetchNotifications = useNotificationStore((state) => state.fetch);
  const notificationCount = useNotificationStore((state) => state.number);

  useEffect(() => {
    if (currentUser) {
      fetchNotifications();
    }
  }, [currentUser, fetchNotifications]);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="LamaEstate Logo" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt={currentUser.username} />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {notificationCount > 0 && <div className="notification">{notificationCount}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">Sign up</a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="Menu" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          {currentUser ? (
            <Link to="/profile" className="profile">
              {notificationCount > 0 && <div className="notification">{notificationCount}</div>}
              <span>Profile</span>
            </Link>
          ) : (
            <>
              <a href="/login">Sign in</a>
              <a href="/register">Sign up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
