import { BDiv, List, BA } from "bootstrap-4-react";

const Breadcrumb = (props) => {
  var cat = "";
  var tit = "";
  if (!props.pageCategory) {
    cat = "none";
  }

  if (!props.pageTitle) {
    tit = "none";
  }
  return (
    <BDiv className="page-header">
      <BDiv className="page-block">
        <BDiv className="row align-items-center">
          <BDiv className="col-md-12">
            <BDiv className="page-header-title">
              <h5>{props.pageTitle}</h5>
            </BDiv>
            <List className="breadcrumb">
              <List.Item className="breadcrumb-item">
                <BA href="/">
                  <i className="feather icon-home"> Dashboard</i>
                </BA>
              </List.Item>
              <List.Item display={cat} className="breadcrumb-item">
                <BA>{props.pageCategory}</BA>
              </List.Item>
              <List.Item display={tit} className="breadcrumb-item">
                <BA>{props.pageTitle}</BA>
              </List.Item>
            </List>
          </BDiv>
        </BDiv>
      </BDiv>
    </BDiv>
  );
};

export default Breadcrumb;
