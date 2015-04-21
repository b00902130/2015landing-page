/**
 * Created by pilagod on 4/20/15.
 */

/*******************************/
/*          Main Page          */
/*******************************/

var Navbar = React.createClass({displayName: "Navbar",
   render: function(){
       return(
            React.createElement("div", null, "Nav")
       )
   }
});

var Main = React.createClass({displayName: "Main",
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement(Index, null), 
                React.createElement(Intro, null)
            )
        )
    }
});

var Footer = React.createClass({displayName: "Footer",
    render: function(){
        return(
            React.createElement("div", null, "Footer")
        )
    }
});

var Index = React.createClass({displayName: "Index",
    render: function(){
        return(
            React.createElement("section", {id: "index"}, 
                React.createElement("img", {className: "background", src: "/img/index/bg1.png"}), 
                React.createElement("img", {src: "/img/index/apply_button.png"}), 
                React.createElement("img", {src: "/img/index/mentor_"})
            )
        )
    }
});

var Intro = React.createClass({displayName: "Intro",
    render: function(){
        return(
            React.createElement("section", null, "Intro")
        )
    }
});

var Invitation = React.createClass({displayName: "Invitation",
    render: function(){
        return(
            React.createElement("section", null, "Invitation")
        )
    }
});

var Faq = React.createClass({displayName: "Faq",
    render: function(){
        return(
            React.createElement("section", null, "Faq")
        )
    }
});


/*******************************/
/*           Render            */
/*******************************/

React.render(React.createElement(Navbar, null), document.getElementById('navbar'));
React.render(React.createElement(Main, null), document.getElementById('main'));
React.render(React.createElement(Footer, null), document.getElementById('footer'));

/*******************************/
/*          Elements           */
/*******************************/


