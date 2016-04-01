/**
 * Created by gaoyujuan on 2016/3/31.
 */
'use strict';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends Component {
  render(){
    return (
      <h1>Hello world</h1>
    )
  }
}

ReactDom.render(<HelloWorld />,document.getElementById('app'));
