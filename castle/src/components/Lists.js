import React, {Component} from 'react';
import Data from '../data/users.json';
import {Table, Card, Pagination} from 'semantic-ui-react';
//import 'semantic-ui-react/semantic.min.css';

class Lists extends Component {
  state = {}

  handleItemClick = (e, {name}) => {
    this.setState({
      activeItem: name
    })
  }
  render(){
    return (
      <div>
        {Data.map((detail, i) => {
          return (
            <div>
              <Table key={i} compact={true} attached={true}>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={3}>
                      <Card key={i}
                        color={(() => {
                          if(detail.risk <= 0.6) return "green"
                          else if(detail <= 0.89) return "yellow"
                          else return "red"
                        })()}
                        >
                          <Card.Content header={detail.risk} />
                          <Card.Content extra />
                        </Card>{" "}
                    </Table.Cell>{" "}
                    <Table.Cell width={3}>{detail.id}</Table.Cell>{" "}
                    <Table.Cell width={3}>{detail.name}</Table.Cell>{" "}
                    <Table.Cell width={3}>{detail.email_md5}</Table.Cell>{" "}
                    <Table.Cell width={3}>
                      {" "}
                      {detail.last_location.ip}{" "}
                      <a href={detail.last_location.location}>
                        {" "}
                        Click {detail.location} {" "}
                      </a>{" "}
                    </Table.Cell>{" "}
                  </Table.Row>{" "}
                </Table.Body>{" "}
              </Table>{" "}
            </div>
          )
        })}{" "}
      </div>
    )
  }
}

export default Lists;
