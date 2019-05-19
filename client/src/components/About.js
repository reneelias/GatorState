import React,{Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';

const Names = styled.h1`
    text-align:center;
`


class About extends Component{
    render(){
        return(
            <CardColumns >
            {/* Jonathan */}
            <Card >
                <Names>Jonathan Gurdal</Names>
                <img src="https://i.imgur.com/WGZzg1P.jpg" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush" style={{textAlign: "center", fontSize:"1.5em"}}>
                        <ListGroupItem>
                            <Card.Link href= "mailto:jgurdal@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/jgurdal">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://linkedin.com/in/jonathangurdal">LinkedIn</Card.Link>    
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/* Rene */}
            <Card >
                <Names>Rene Elias</Names>
                <img src="https://avatars2.githubusercontent.com/u/7273788?s=460&v=4" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:reneelias03@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/reneelias">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://www.linkedin.com/in/rene-elias-3136ab3a/">LinkedIn</Card.Link>    
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/*Daisy */}
            <Card >
                <Names>Daisy </Names>
                <img src="https://user-images.githubusercontent.com/25631925/53280177-2300e400-36cc-11e9-93c1-410b03231ccb.png" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:itsdaisysun@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/itsdsun">Github</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/*Marlon */}
            <Card >
                <Names>Marlon Johnson</Names>
                <img src="https://avatars2.githubusercontent.com/u/5723692?s=460&v=4" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:itsdaisysun@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/itsdsun">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://www.linkedin.com/in/marvj">LinkedIn</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/*Kayla */}
            <Card >
                <Names>Kayla </Names>
                <img src="https://avatars0.githubusercontent.com/u/28065363?s=400" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:kayla.musleh@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/123kay12">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://www.linkedin.com/in/kayla-m-91a39999/">LinkedIn</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/*Minho */}
            <Card >
                <Names>Minho </Names>
                <img src="https://avatars2.githubusercontent.com/u/17245555?v=3&s=400" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:minhocha1004@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/minhoCHA">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://linkedin.com/in/minho-cha-17333a113">LinkedIn</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card >
                <Names>Rowvin Dizon</Names>
                <img src="https://avatars1.githubusercontent.com/u/7840167?s=460&v=4" className="img-thumbnail" />
                <Card.Body>  
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href= "mailto:rowvindizon@gmail.com">Email</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://github.com/r0wvin">Github</Card.Link>
                        </ListGroupItem>
                        <ListGroupItem >
                            <Card.Link href= "https://linkedin.com/in/rowvin">LinkedIn</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            </CardColumns>
        )
    }
}

export default About