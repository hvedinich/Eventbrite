import React from 'react';
import CategoriesContainer from "../../containers/CategoriesContainer";
import EventListContainer from "../../containers/EventListContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Main</h1>
        <CategoriesContainer/>
        <EventListContainer/>
      </div>
    );
  }
}
export default App 