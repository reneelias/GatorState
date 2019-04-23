// import React from 'react';
// import axios from 'axios';
// import { Button, Icon, Input, List, Image } from 'semantic-ui-react';

// class Listing extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             streetAddress = "",
//             city = "",
//             zipCode = "",
//             state = "",
//             imageLocation = "",
//             homeType = "",
//         };
//     }
//     authenticate = () => {
//         setTimeout(() => {
//             axios.get("http://35.236.74.85/listings/" + req.query.search + "/" + req.query.filter)
//                 .then((networkResponse) => {
//                     const data = networkResponse.data;
//                     this.setState({
//                         streetAddress: data["street_address"],
//                         city: data["city"],
//                         zipCode: data["zip_code"],
//                         state: data["state"],
//                         imageLocation = data["images"],
//                         homeType = data["home_type"]
//                     });
//                 })
//                 .catch((e) => {
//                     console.log(e);
//                 })

//         }, 1000);
//     }


// }