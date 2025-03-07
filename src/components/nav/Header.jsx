import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SunOutlined } from "@ant-design/icons";
import "../../index.css";

function Header() {
    const [current, setCurrent] = useState("h");
    const onClick = (e) => {
        // console.log("click ", current);
        setCurrent(e.key);
    };
    // const items = [
    //     {
    //         label: <Link to="/">Home</Link>,
    //         icon: <HomeTwoTone />,
    //         key: "h",
    //     },
    //     {
    //         label: <Link to="/register">Register</Link>,
    //         icon: <EditTwoTone />,
    //         key: "r",
    //     },
    //     {
    //         label: <Link to="/login">Login</Link>,
    //         icon: <CheckCircleTwoTone />,
    //         key: "l",
    //     },
    // ];

    const [logoColor, setLogoColor] = useState("");

    const handleColorChange = () => {
        setLogoColor(logoColor === "orange" ? "black" : "orange");
    };
    return (
        <>
            <div className="navbar">
                <Link to="/" className="navLink">
                    {/* <img alt="" src={logo} /> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill={logoColor}>
                        {logo}
                    </svg> */}
                    {/* <img src={logo} alt="logo" /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="200"
                        // height="200"
                        fill={logoColor}
                        className="logo"
                    >
                        <text
                            x="25"
                            y="25"
                            fontSize="2.5rem"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontFamily="Courier New"
                        >
                            AS
                        </text>
                    </svg>
                    Home
                </Link>
                <div className="navbar-right">
                    <button onClick={() => handleColorChange()} className="theme">
                        <SunOutlined/>
                    </button>
                    <Link to="/register" className="navLink" onClick={onClick}>
                        Register
                    </Link>
                    <Link to="/login" className="navLink">
                        Login
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Header;
