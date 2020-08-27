import React from "react"
import "./Sitemap.css"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import ComingSoon from "../ComingSoon"
import Image from "../Image"
import { Button } from "../../components/Button"
import { close } from "../../icons"

const Sitemap = ({
    user: {
      userId,
      firstName,
      lastName,
      photography
    },
    onClose
  }) => (
    <div className="sitemap">
      {userId
        ?
          <div className="user layout--columns layout--columns-2">
            <div className="user__photography">
              <Image url={photography} alt={`${firstName} ${lastName} photography`}/>
            </div>
            <div className="user__meta">
              <div className="user__name">
                <div className="heading heading--variant-h2 heading--color-primary">
                  <h2>{firstName} <span>{lastName}</span></h2>
                </div>
              </div>
              <Link to={userId}>Edit my profile</Link>
            </div>
          </div>
        :
          <div className="sitemap__header">
            <img className="logo" src={logo} alt="logo"/>
          </div>
      }
      <div className="close">
        <Button
          variant="text"
          size="small"
          withIcon={close}
          onClick={onClose}
        />
      </div>
      <nav className="navbar">
        <ol>
          <li className="navbar__item">
            <Link to="/" onClick={onClose}>Artists</Link>
          </li>
          <li className="navbar__item">
            <Link to="#">Artists I follow</Link>
          </li>
          <li className="navbar__item navbar--coming-soon layout--columns layout--columns-2">
            <Link to="#">Artists near me</Link>
            <ComingSoon/>
          </li>
          <li className="navbar__item navbar--coming-soon layout--columns layout--columns-2">
            <Link to="#">Art events near me</Link>
            <ComingSoon/>
          </li>
          <li className="navbar__item">
            <Link to="/about" onClick={onClose}>About art discovery</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" onClick={onClose}>Contact</Link>
          </li>
        </ol>
      </nav>
      <footer>
        <span className="copyright">
          &copy; Art discovery 2020. All rights reserved.
        </span>
      </footer>
    </div>
  )

export default Sitemap
