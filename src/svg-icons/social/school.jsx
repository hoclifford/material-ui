let React = require('react');
let SvgIcon = require('../../svg-icon');

let SocialSchool = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </SvgIcon>
    );
  }

});

module.exports = SocialSchool;