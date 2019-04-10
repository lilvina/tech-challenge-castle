import React, {Component} from 'react';
import Data from '../data/users.json';
import {Container, Card, Menu, Table} from 'semantic-ui-react';
//import 'semantic-ui-react/semantic.min.css';

class Lists extends Component {
  state = {}

  handleItemClick = (e, {name}) => {
    this.setState({
      activeItem: name
    })
  }
  render(){
    const {activeItem} = this.state
    return (
      <div>
        <Container>
          <h2>Castle Project</h2>
          {Data.map((detail, i) => {
            return (
              <div>
                <Menu>
                  <Menu.Item
                    key={i}
                    color={(() => {
                      if(detail.risk <= 0.89) return "orange"
                    })()}
                    name="Suspicious"
                    active={activeItem === "Suspicious"}
                    onClick={this.handleItemClick}
                  >
                  Suspicious{" "}
                  </Menu.Item>
                  <Menu.Item
                    key={i}
                    color={(() => {
                      if(detail.risk <= 0.9) return "red"
                    })()}
                    name="Suspicious"
                    active={activeItem === "Suspicious"}
                    onClick={this.handleItemClick}
                  >
                  Suspicious{" "}
                  </Menu.Item>
                </Menu>
              </div>
            )
          })}
        </Container>
      </div>
    )
  }
}

export default Lists;
