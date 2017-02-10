var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                <h3>Nav Page</h3>
                <IndexLink to="/" activeClassName="active" activeStyle ={{fontWeight:'bold'}}>Showcase</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle ={{fontWeight:'bold'}}>About</Link>
                <Link to="/careers" activeClassName="active" activeStyle ={{fontWeight:'bold'}}>Careers</Link>

            </div>
        );
    }
});

module.exports = Nav;