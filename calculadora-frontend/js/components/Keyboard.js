import React, {Component} from 'react';

// var chunk = (arr, n) => Array(Math.ceil(arr.length/n)).fill().map((_,i)=>arr.slice(i*n,i*n+n))
//
// class Key extends React.Component {
//   render(){
//     return <td className="key" colspan={this.props.colSpan} rowspan={this.props.rowSpan} onClick={this.props.onClick}>{this.props.children}</td>;
//   }
// }
//
// class Keyboard extends React.Component {
//   render(){
//     return <table width={this.props.size} height={this.props.size} style={{textAlign:'center'}} className="keyboard" border={0}>
//     {chunk(this.props.children,this.props.line).map(d=><tr>{d.map(i=>i)}</tr>)}
//   </table>;
//   }
// }
//
// class App extends React.Component {
//   render(){
//     return <Keyboard size={500} line={5}>
//       {[1,2,3,'+', 'L',4,5,6,'-', '\\/',7,8,9,'*','^','',0,' ','/'].map((k)=><Key key={k}>{k}</Key>)}
//
//     </Keyboard>;
//   }
// }
//
// ReactDOM.render(<App/>, document.querySelector('main'))

export default class Keyboard extends Component {

}
