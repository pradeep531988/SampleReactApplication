import React from "react";
import Header from './Header';
import Title from './Header/Title';
import Nav from "../components/layout/Nav";

export default class Layout  extends React.Component{
    
    constructor() {
        super();
        this.state = {
          title: "Welcome",
        };
      }

      changeTitle(title) {
        this.setState({title});
      }

    render() {
      const { location } = this.props;
      const containerStyle = {
        marginTop: "100px"
      };

        return (
    
            <div>
            <div>
            <Nav location={location} />
            </div>
            <div class="container" style={containerStyle}>

                 <h1>Pradeep First React COmp {this.state.title} </h1>
                <Title title={this.state.title}></Title>
                <Header  changeTitle={this.changeTitle.bind(this)}></Header>
                <div>Local Dashboard</div>
                <iframe src="http://localhost:8060/d-solo/Se8AUCVmk/pradeep_details?orgId=1&panelId=2&from=1524752532741&to=1524758861877" width="450" height="200" frameborder="0"></iframe>
            </div>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
        </div>
      </div>

        )
    };
}

