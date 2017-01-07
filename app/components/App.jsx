
import React from 'react';
import Note from './Note.jsx';
import Img from './Img';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Note />
        <Img />
      </div>
    );
  }

}