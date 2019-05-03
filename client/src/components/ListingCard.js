import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class ListingCard extends Component {
  render() {
    console.log(this.props);
    return (
    <Container>
        <Card>
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src="//placehold.it/200" class="img-fluid" alt="" />
                </div>
                <Col>
                    <div class="card-block px-2">
                        <h4 className="card-title">Address: 1600 Holloway Avenue</h4>
                        <h5 className="card-text">Price: </h5>
                        <h5 className="card-text">Distance: </h5>
                        <Button href="#" className="primary btn-block">View Listing</Button>
                    </div>
                </Col>
            </div>
        </Card>
    </Container>
    );
  }
}

const cardStyle = {
  width: '100%',
  background: 'grey',
  padding: '1%'
};
//PropTypes
ListingCard.propTypes = {
  todo: PropTypes.object.isRequired
};

export default ListingCard;
