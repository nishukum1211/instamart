import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex flex-col text-lg font-serif font-bold border-t border-slate-300 shadow-md bg-slate-200 pt-5">
      {/* contact */}
      <div className=" flex justify-evenly text-gray-600 pb-4">
        <div className="column about">
          <h3>Connect</h3>
          <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Ashiana More, Bailey Road, Patna-800014
          </p>
            <a
              className="fa fa-mail-forward "
							aria-hidden="true"
              href="mailto:singhvivekkumar309@gmail.com?subject = Feedback&body = Message"
            >
							Send Feedback
            </a>
						
        </div>

        {/* social icon */}
        <ul className="flex flex-col font-semibold text-gray-600">
          <Link to="https://www.facebook.com/profile.php?id=100009363129093">
            <li className="fa fa-facebook-square m-1 p-1 px-10 "> Facebook</li>
          </Link>
          <Link to="https://twitter.com/Vivek20022001">
            <li className="fa fa-twitter-square m-1 p-1 px-10"> Twitter</li>
          </Link>
          <Link to="https://www.linkedin.com/in/singhvivekkumar309/">
            <li className="fa fa-linkedin-square m-1 p-1 px-10"> LinkedIn</li>
          </Link>
          <Link to="https://github.com/singhvivekkumar">
            <li className="fa fa-github-square m-1 p-1 px-10"> GitHub</li>
          </Link>
        </ul>
        <div className=" text-gray-600 ">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            {/* <li>
              <a href="#support">Support</a>
            </li> */}
          </ul>
        </div>
      </div>
      {/* footer menu bar */}
      <div className="flex flex-col items-center bg-zinc-300 text-gray-700">
        <div className=" flex m-1 p-1 ">
          <a className=" px-6 " href="">F.A.Q</a>
          <a className=" px-6 " href="">Cookies Policy</a>
          <a className=" px-8 " href="">Terms Of Service</a>
          <a className=" px-6 " href="">Support</a>
        </div>
        <p className="m-2 p-2">Copyright &copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
