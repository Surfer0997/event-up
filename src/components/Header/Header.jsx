import Link from "next/link";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={"/images/logo_black.png"}
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                 Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Joyful events in your city</p>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
