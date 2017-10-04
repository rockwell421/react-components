import React from 'react';

class ImageCaption extends React.Component {
  render() {
    return (
      <figure>
        <img alt={this.props.text} src={this.props.source}/>
        <figcaption>
            {this.props.text}
        </figcaption>
        <hr/>
      </figure>
    );
  }
}

export default ImageCaption;