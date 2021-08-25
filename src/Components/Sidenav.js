import {
  Nav,
  BDiv,
  BImg,
  BSpan,
  BA,
  List,
  BP,
  BStrong,
} from "bootstrap-4-react";

const Sidenav = () => {
  return (
    <Nav className="pcoded-navbar menupos-fixed menu-light brand-blue ">
      <BDiv className="navbar-wrapper ">
        <BDiv className="navbar-brand header-logo">
          <BA href="/" className="b-brand" text="white">
            <BImg
              src="images/logo.png"
              alt=""
              style={{
                width: 55 + "px",
                height: 55 + "px",
              }}
              mr="2"
              border="success"
            />
            <BDiv>
              <h6 style={{ fontSize: 15 + "px" }}>
                <BStrong>Crosstech Foods</BStrong>
              </h6>
              <h6 style={{ fontSize: 18 + "px", fontStretch: 5 + "px" }}>
                <BStrong>ADMIN</BStrong>
              </h6>
            </BDiv>
          </BA>
          <BA className="mobile-menu" id="mobile-collapse">
            <BSpan></BSpan>
          </BA>
        </BDiv>

        <BDiv className="navbar-content scroll-div">
          <List className="nav pcoded-inner-navbar">
            <List.Item className="nav-item pcoded-menu-caption">
              <label>Navigation</label>
            </List.Item>
            <List.Item className="nav-item">
              <BA href="/" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-home"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Dashboard</BSpan>
              </BA>
            </List.Item>
            <List.Item className="nav-item pcoded-menu-caption">
              <label>Main Menu</label>
            </List.Item>
            <List.Item className="nav-item pcoded-hasmenu">
              <BA className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-box"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Stock</BSpan>
              </BA>
              <List className="pcoded-submenu">
                <List.Item className="">
                  <BA href="/updateproduct" className="">
                    Update Product Stock
                  </BA>
                </List.Item>
                <List.Item className="">
                  <BA href="/allproducts" className="">
                    Products
                  </BA>
                </List.Item>
              </List>
            </List.Item>
            <List.Item className="nav-item pcoded-menu-caption">
              <label>Staff & Users</label>
            </List.Item>
            <List.Item className="nav-item pcoded-hasmenu">
              <BA className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-users"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Staff</BSpan>
              </BA>
              <List className="pcoded-submenu">
                <List.Item className="">
                  <BA href="/allstaff" className="">
                    All staff
                  </BA>
                </List.Item>
                <List.Item className="">
                  <BA href="/newstaff" className="">
                    Add New Staff
                  </BA>
                </List.Item>
              </List>
            </List.Item>

            <List.Item className="nav-item pcoded-hasmenu">
              <BA className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-user"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Users</BSpan>
              </BA>
              <List className="pcoded-submenu">
                <List.Item className="">
                  <BA href="/allusers" className="">
                    All Users
                  </BA>
                </List.Item>
                <List.Item className="">
                  <BA href="/Newuser" className="">
                    New User
                  </BA>
                </List.Item>
              </List>
            </List.Item>
            <List.Item className="nav-item pcoded-menu-caption">
              <label>Chart & Maps</label>
            </List.Item>
            <List.Item className="nav-item">
              <BA href="chart-morris.html" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-pie-chart"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Chart</BSpan>
              </BA>
            </List.Item>
            <List.Item className="nav-item">
              <BA href="map-google.html" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-map"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Maps</BSpan>
              </BA>
            </List.Item>
            <List.Item className="nav-item pcoded-menu-caption">
              <label>Pages</label>
            </List.Item>
            <List.Item className="nav-item pcoded-hasmenu">
              <BA href="#!" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-lock"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Authentication</BSpan>
              </BA>
              <List className="pcoded-submenu">
                <List.Item className="">
                  <BA href="auth-signup.html" className="" target="_blank">
                    Sign up
                  </BA>
                </List.Item>
                <List.Item className="">
                  <BA href="auth-signin.html" className="" target="_blank">
                    Sign in
                  </BA>
                </List.Item>
              </List>
            </List.Item>
            <List.Item className="nav-item">
              <BA href="sample-page.html" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-sidebar"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Sample page</BSpan>
              </BA>
            </List.Item>
            <List.Item className="nav-item disabled">
              <BA href="#!" className="nav-link">
                <BSpan className="pcoded-micon">
                  <i className="feather icon-power"></i>
                </BSpan>
                <BSpan className="pcoded-mtext">Disabled menu</BSpan>
              </BA>
            </List.Item>
          </List>
          <BDiv className="card text-center">
            <BDiv className="card-block">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                ×
              </button>
              <i className="feather icon-sunset f-40"></i>
              <h6 className="mt-3">Upgrade to pro</h6>
              <BP>upgrade for get full themes and 30min support</BP>
              <BA
                href="https://codedthemes.com/item/flash-able-bootstrap-admin-template/"
                target="_blank"
                className="btn btn-gradient-primary btn-sm text-white m-0"
              >
                Upgrade
              </BA>
            </BDiv>
          </BDiv>
        </BDiv>
      </BDiv>
    </Nav>
  );
};

export default Sidenav;
