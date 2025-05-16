import { NavLink } from "react-router"

export const Header = () => {
    const styleNavColor = ({ isActive }) => {
        return {
            color: isActive ? "Blue" : "black"
        }
    }
    return (
        <>
            {/* <!-- ========== Start Navbar ========== --> */}

            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="# ">SIGN IN</NavLink>
                            <NavLink to="# ">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index.html">
                            <p>Ahmed</p>
                        </NavLink>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link"
                                    style={styleNavColor}
                                >Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link"
                                    style={styleNavColor}
                                >about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link"
                                    style={styleNavColor}
                                >Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link"
                                    style={styleNavColor}
                                >contact</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink
                                    to="addToCart.html"
                                    className="nav-link add-to-cart-button"
                                    id="cartValue"
                                >
                                    <i className="fa-solid fa-cart-shopping"></i> 0</NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}