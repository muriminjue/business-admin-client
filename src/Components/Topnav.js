import {
  Navbar,
  BDiv,
  BA,
  BSpan,
  BImg,
  List,
  BStrong,
  BP,
  Form,
} from "bootstrap-4-react";
import { useFullScreen } from "react-browser-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topnav = () => {
  const { toggle, fullScreen } = useFullScreen();
  return (
    <Navbar className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
      <BDiv className="m-header">
        <BA className="mobile-menu" id="mobile-collapse1">
          <BSpan> </BSpan>
        </BA>
        <BA href="/" className="b-brand" text="white">
          <BImg
            src="images/logo.png"
            alt=""
            style={{ width: 55 + "px", height: 55 + "px" }}
            mr="2"
            border="white"
          />
          <h4>Crosstech Foods Admin</h4>
        </BA>
      </BDiv>

      <BA className="mobile-menu" id="mobile-header" href="#!">
        <i className="feather icon-more-horizontal"></i>
      </BA>

      <BDiv className="collapse navbar-collapse">
        <BA className="mob-toggler"></BA>
        <List className="navbar-nav mr-auto">
          <List.Item className="nav-item">
            <BDiv className="main-search open">
              <BDiv className="input-group">
                <Form.Input
                  type="text"
                  id="m-search"
                  placeholder="Search . . ."
                />
                <BA className="input-group-append search-close">
                  <i className="feather icon-x input-group-text"></i>
                </BA>
                <BSpan className="input-group-append search-btn btn btn-primary">
                  <i className="feather icon-search input-group-text"></i>
                </BSpan>
              </BDiv>
            </BDiv>
          </List.Item>
        </List>
        <List className="navbar-nav ml-auto">
          <List.Item>
            <BDiv className="dropdown">
              <BA
                style={{ color: "black" }}
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="icon feather icon-bell"></i>
              </BA>
              <BDiv className="dropdown-menu dropdown-menu-right notification">
                <BDiv className="noti-head">
                  <h6 className="d-inline-block m-b-0">Notifications</h6>
                  <BDiv className="float-right">
                    <BA href="#!" className="m-r-10">
                      mark as read
                    </BA>
                    <BA href="#!">clear all</BA>
                  </BDiv>
                </BDiv>
                <List className="noti-body">
                  <List.Item className="notification">
                    <BDiv className="media">
                      <BImg
                        rounded="circle"
                        className="img-radius"
                        src="https://picsum.photos/200/200?random=1"
                        alt="Generic placeholder image"
                      />
                      <BDiv className="media-body">
                        <BP>
                          <BStrong>John Doe</BStrong>
                          <BSpan className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10"></i>5
                            min
                          </BSpan>
                        </BP>
                        <BP>New ticket Added</BP>
                      </BDiv>
                    </BDiv>
                  </List.Item>

                  <List.Item className="notification">
                    <BDiv className="media">
                      <BImg
                        rounded="circle"
                        className="img-radius"
                        src="https://picsum.photos/200/200?random=2"
                        alt="Generic placeholder image"
                      />
                      <BDiv className="media-body">
                        <BP>
                          <BStrong>Joseph William</BStrong>
                          <BSpan className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10"></i>10
                            min
                          </BSpan>
                        </BP>
                        <BP>Prchace New Theme and make payment</BP>
                      </BDiv>
                    </BDiv>
                  </List.Item>
                  <List.Item className="notification">
                    <BDiv className="media">
                      <BImg
                        rounded="circle"
                        className="img-radius"
                        src="https://picsum.photos/200/200?random=3"
                        alt="Generic placeholder image"
                      />
                      <BDiv className="media-body">
                        <BP>
                          <BStrong>Sara Soudein</BStrong>
                          <BSpan className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10"></i>12
                            min
                          </BSpan>
                        </BP>
                        <BP>currently login</BP>
                      </BDiv>
                    </BDiv>
                  </List.Item>
                  <List.Item className="notification">
                    <BDiv className="media">
                      <BImg
                        rounded="circle"
                        className="img-radius"
                        src="https://picsum.photos/200/200?random=4"
                        alt="Generic placeholder image"
                      />
                      <BDiv className="media-body">
                        <BP>
                          <BStrong>Sara Soudein</BStrong>
                          <BSpan className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10"></i>12
                            min
                          </BSpan>
                        </BP>
                        <BP>currently login</BP>
                      </BDiv>
                    </BDiv>
                  </List.Item>
                </List>

                <BDiv className="noti-footer">
                  <a href="#!">show all</a>
                </BDiv>
              </BDiv>
            </BDiv>
          </List.Item>
          <List.Item>
            <BDiv className="dropdown drp-user">
              <BA className="dropdown-toggle" data-toggle="dropdown">
                <i
                  style={{ color: "black" }}
                  className="icon feather icon-settings"
                ></i>
              </BA>
              <BDiv className="dropdown-menu dropdown-menu-right profile-notification">
                <BDiv className="pro-head">
                  <BImg
                    src="https://picsum.photos/200/200?random=5"
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                  <BSpan>John Doe</BSpan>
                  <BA
                    href="auth-signin.html"
                    className="dud-logout"
                    title="Logout"
                  >
                    <i className="feather icon-log-out"></i>
                  </BA>
                </BDiv>
                <List className="pro-body">
                  <List.Item>
                    <BA href="#!" className="dropdown-item">
                      <i className="feather icon-settings"></i> Settings
                    </BA>
                  </List.Item>
                  <List.Item>
                    <BA href="#!" className="dropdown-item">
                      <i className="feather icon-user"></i> Profile
                    </BA>
                  </List.Item>
                  <List.Item>
                    <BA href="message.html" className="dropdown-item">
                      <i className="feather icon-mail"></i> My Messages
                    </BA>
                  </List.Item>
                  <List.Item>
                    <BA href="auth-signin.html" className="dropdown-item">
                      <i className="feather icon-lock"></i> Lock Screen
                    </BA>
                  </List.Item>
                </List>
              </BDiv>
            </BDiv>
          </List.Item>
          <List.Item>
            <BA onClick={toggle}>
              <FontAwesomeIcon
                style={{ color: "black" }}
                icon={fullScreen ? "compress" : "expand"}
              />
            </BA>
          </List.Item>

          <List.Item>
            <BImg
              src="https://picsum.photos/200/200?random=5"
              rounded="circle"
              style={{ height: 35 + "px", Width: 35 + "px" }}
              alt="User-Profile-Image"
            />
            <BSpan display="none sm-inline" ml="2">
              {" "}
              <BStrong> John Doe</BStrong>
            </BSpan>
          </List.Item>
        </List>
      </BDiv>
    </Navbar>
  );
};

export default Topnav;
