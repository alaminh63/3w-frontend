import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import CustomModal from "../../utils/CustomModal";

function NavigationBar() {
  const { logout, user, setTransectionName, transectionName } =
    useContext(AuthContext);

  const dropdownMenu = [
    {
      title: "Ethereum Kovan",
    },
    {
      title: "Arbitrum Rinkeby",
    },
    {
      title: "Avalanche Fuji",
    },
    {
      title: "BNB Chain Testnet",
    },
    {
      title: "Fantom Testnet",
    },
    {
      title: "Harmony Testnet",
    },
    {
      title: "BNB Chain Testnet",
    },
    {
      title: "POA Network Sokol",
    },
    {
      title: "Polygon Mumbai",
    },
  ];
  const userInfo = [
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Sign Up",
      link: "/register",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
  ];

  const handleTransectionName = (title) => {
    setTransectionName(title);
    console.log(transectionName);
  };
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Navbar expand="lg" className="">
      <Container>
        <Link className="text-decoration-none fw-bolder  ">
          <Navbar.Brand className="customPrimaryColor fs-3">
            Faucets
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto py-1">
            <Nav.Link>
              <Link
                to="dashboard/profile"
                className="text-decoration-none "
              >
                Dashboard
              </Link>
            </Nav.Link>
            <div className="border border-1  border-black border-opacity-75 px-1  rounded-2 ">
              <NavDropdown
                className=""
                title={transectionName}
                id="basic-nav-dropdown"
              >
                {dropdownMenu.map((item, index) => (
                  <p
                    className="my-1 "
                    onClick={() => {
                      handleTransectionName(item.title);
                    }}
                    key={index}
                  >
                    <NavDropdown.Item href="#action/3.4">
                      {item.title}
                    </NavDropdown.Item>
                  </p>
                ))}
              </NavDropdown>
            </div>
            <div className="mx-1 ">
              <CustomModal />
            </div>
            {user ? (
              <Nav.Link onClick={() => handleLogOut()} href="#home">
                Logout
              </Nav.Link>
            ) : (
              <NavDropdown title={<UserCircle />} id="basic-nav-dropdown">
                {userInfo.map((item, index) => (
                  <Link
                    to={item?.link}
                    className="text-decoration-none"
                    key={index}
                  >
                    <p>
                      <NavDropdown.Item href="#action/3.4">
                        {item.title}
                      </NavDropdown.Item>
                    </p>
                  </Link>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
