

import React from 'react';

export default class Img extends React.Component {

  render() {
    return (
      <div>
        <h1>看，图片</h1>
        <img src={require("./lan.jpeg")} alt="是否能看见呢?" />
      </div>
    );
  }

}