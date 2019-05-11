import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {CardStyle} from './styled';

export class ListingCard extends Component {
  render() {
    return (
    <CardStyle>
        <Card >
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={this.props.todo.imgurl} height="200" width="200" class="img-fluid" alt="" />
                </div>
                <Col>
                    <div class="card-block px-2">
                        <h4 className="card-title">Address: {this.props.todo.address}</h4>
                        <h5 className="card-text">Price: {this.props.todo.price}</h5>
                        <h5 className="card-text">Distance: {this.props.todo.distance}</h5>
                        <Button href="#" className="primary btn-block">View Listing</Button>
                    </div>
                </Col>
            </div>
        </Card>
    </CardStyle>
    );
  }
}

//PropTypes
ListingCard.propTypes = {
  todo: PropTypes.object.isRequired
};

export default ListingCard;
