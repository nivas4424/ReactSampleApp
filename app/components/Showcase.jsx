var React = require('react');
var SearchForm = require('SearchForm');
var SearchMessage = require('SearchMessage');

var Showcase = React.createClass({
    getInitialState: function(){
        return{
            location:'miami',
            temp: 88
        }
    },
    handelSearch : function(location){
        this.setState({
            location : location,
            temp :77
        });
    },
    render: function(){
        var {temp, location} = this.state;
        return(
            <div>
                <h3>IN Showcase</h3>
                <SearchForm onSearch={this.handelSearch}/>
                <SearchMessage location={location} temp = {temp} />
            </div>
        );
    }
}); 

module.exports = Showcase;