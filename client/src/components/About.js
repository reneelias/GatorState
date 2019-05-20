import React,{Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Names = styled.h4`
    text-align:center;

`
class About extends Component{    
    render(){
        return(
            <Jumbotron > 
                <h1 style={{textAlign:"center"}}> Team 06 </h1>
                <Container fluid>
                <Row style={{marginBottom: "10px"}}>
                    <Col >
                    <Card >
                        <Card.Header><Names>Team Lead</Names></Card.Header>
                        <Card.Img src="https://i.imgur.com/QSF2mEv.jpg"  />
                        <Names>Rowvin Dizon</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href= "mailto:rowvindizon@gmail.com">Email</Nav.Link>
                                <Nav.Link href= "https://github.com/r0wvin">Github</Nav.Link>
                                <Nav.Link href= "https://linkedin.com/in/rowvin">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col>
                    <Card >
                        <Card.Header><Names>Front End Lead</Names></Card.Header>
                        <Card.Img src="http://www.simpleimageresizer.com/_uploads/photos/0c4f8132/WGZzg1P_400x400.jpg"  />
                        <Names>Jonathan Gurdal</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href= "mailto:jgurdal@gmail.com">Email</Nav.Link>
                                <Nav.Link href= "https://github.com/jgurdal">Github</Nav.Link>
                                <Nav.Link href= "https://linkedin.com/in/jonathangurdal">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col>
                    <Card >
                        <Card.Header><Names>Back End Lead</Names></Card.Header> 
                        <Card.Img src="https://i.imgur.com/KPSQ3N8.jpg"  />
                        <Names>Marlong Johnson</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href = "mailto:johnsonmarlon18@gmail.com">Email</Nav.Link>
                                <Nav.Link href = "https://github.com/Mvrs " >Github</Nav.Link>
                                <Nav.Link  href= "https://www.linkedin.com/in/marvj/">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                        <Col>
                            <Card >
                                <Card.Header><Names>Github Master</Names></Card.Header> 
                                <Card.Img variant="top" src="https://i.imgur.com/TMd916g.jpg"  />
                                <Names>Kayla Musleh</Names>
                                <Card.Footer>
                                    <Nav className="justify-content-center">
                                        <Nav.Link href= "mailto:kayla.musleh@gmail.com">Email</Nav.Link>
                                        <Nav.Link href= "https://github.com/123kay12">Github</Nav.Link>
                                        <Nav.Link href= "https://www.linkedin.com/in/kayla-m-91a39999/">LinkedIn</Nav.Link>
                                    </Nav>
                                </Card.Footer>
                            </Card>
                        </Col>
                    <Col>
                        <Card >
                            <Card.Header><Names>Full Stack</Names></Card.Header> 
                            <Card.Img variant="top" src="https://i.imgur.com/fGvtZsn.jpg"  />
                            <Names>Minho Cha</Names>
                            <Card.Footer>
                                <Nav className="justify-content-center">
                                        <Nav.Link href= "mailto:minhocha1004@gmail.com">Email</Nav.Link>
                                        <Nav.Link href= "https://github.com/minhoCHA">Github</Nav.Link>
                                        <Nav.Link href= "https://linkedin.com/in/minho-cha-17333a113">LinkedIn</Nav.Link>
                                    </Nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header><Names>Front End</Names></Card.Header> 
                            <Card.Img variant="top" src="http://www.simpleimageresizer.com/_uploads/photos/0c4f8132/53280177-2300e400-36cc-11e9-93c1-410b03231ccb_400x400.jpg"  />
                            <Names>Daisy Sun</Names>
                            <Card.Footer >
                                <Nav className="justify-content-center" >
                                    <Nav.Link href= "mailto:itsdaisysun@gmail.com">Email</Nav.Link>
                                    <Nav.Link href= "https://github.com/itsdsun">Github</Nav.Link>
                                    <Nav.Link href = "https://www.linkedin.com/in/daisy-sun-06388817b" >LinkedIn</Nav.Link>
                                </Nav >
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header><Names>Back End</Names></Card.Header> 
                            <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/7273788?s=460&v=4"  />
                            <Names>Rene Elias</Names>
                            <Card.Footer>
                                <Nav className="justify-content-sm-around">
                                    <Nav.Link href= "mailto:reneelias03@gmail.com">Email</Nav.Link>
                                    <Nav.Link href= "https://github.com/reneelias">Github</Nav.Link>
                                    <Nav.Link href= "https://www.linkedin.com/in/rene-elias-3136ab3a/">LinkedIn</Nav.Link>
                                </Nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                    </Row>

                </Container>
            </Jumbotron>

            // <CardColumns >
            // {/* Jonathan */}
            // <Card >
            //     <Names>Jonathan Gurdal</Names>
            //     <img src="https://i.imgur.com/WGZzg1P.jpg" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush" style={{textAlign: "center", fontSize:"1.5em"}}>
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:jgurdal@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/jgurdal">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://linkedin.com/in/jonathangurdal">LinkedIn</Card.Link>    
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // {/* Rene */}
            // <Card >
            //     <Names>Rene Elias</Names>
            //     <img src="https://avatars2.githubusercontent.com/u/7273788?s=460&v=4" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:reneelias03@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/reneelias">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://www.linkedin.com/in/rene-elias-3136ab3a/">LinkedIn</Card.Link>    
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // {/*Daisy */}
            // <Card >
            //     <Names>Daisy </Names>
            //     <img src="https://user-images.githubusercontent.com/25631925/53280177-2300e400-36cc-11e9-93c1-410b03231ccb.png" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:itsdaisysun@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/itsdsun">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://www.linkedin.com/in/daisy-sun-06388817b/">LinkedIn</Card.Link>
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // {/*Marlon */}
            // <Card >
            //     <Names>Marlon Johnson</Names>
            //     <img src="https://avatars2.githubusercontent.com/u/5723692?s=460&v=4" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:itsdaisysun@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/itsdsun">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://www.linkedin.com/in/marvj">LinkedIn</Card.Link>
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // {/*Kayla */}
            // <Card >
            //     <Names>Kayla </Names>
            //     <img src="https://avatars0.githubusercontent.com/u/28065363?s=400" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:kayla.musleh@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/123kay12">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://www.linkedin.com/in/kayla-m-91a39999/">LinkedIn</Card.Link>
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // {/*Minho */}
            // <Card >
            //     <Names>Minho </Names>
            //     <img src="https://avatars2.githubusercontent.com/u/17245555?v=3&s=400" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:minhocha1004@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/minhoCHA">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://linkedin.com/in/minho-cha-17333a113">LinkedIn</Card.Link>
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // <Card >
            //     <Names>Rowvin Dizon</Names>
            //     <img src="https://avatars1.githubusercontent.com/u/7840167?s=460&v=4" className="img-thumbnail" />
            //     <Card.Body>  
            //         <ListGroup className="list-group-flush">
            //             <ListGroupItem>
            //                 <Card.Link href= "mailto:rowvindizon@gmail.com">Email</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://github.com/r0wvin">Github</Card.Link>
            //             </ListGroupItem>
            //             <ListGroupItem >
            //                 <Card.Link href= "https://linkedin.com/in/rowvin">LinkedIn</Card.Link>
            //             </ListGroupItem>
            //         </ListGroup>
            //     </Card.Body>
            // </Card>
            // </CardColumns>
        )
    }
}

export default About