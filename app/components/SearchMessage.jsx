var React = require('react');

// var SearchMessage = React.createClass({
//     render: function(){
//         var {temp, location}= this.props;
//         return(
//             <h4>Search {temp} Result  {location}</h4>
//         );
//     }
// });

var SearchMessage = ({temp, location}) => {
// var SearchMessage = (props) =>{
//      var {temp, location}= props;
        return(
            <h4>Search {temp} Result  {location}</h4>
        );
    };

module.exports = SearchMessage;