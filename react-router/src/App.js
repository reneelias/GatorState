import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import { connect } from 'react-redux';

class App extends Component {
    render() {
      console.log(this.state);
        return (
          <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => {
  console.log(state);
    return{
      // searchValue: 'hey',
       searchValue: state.searchReducer.searchValue,
    };
  };
  
  const mapDispatchToProps = {
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App);
  
// export default App;