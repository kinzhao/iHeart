import React, { Component } from 'react';

const styles = {
  singer: {
    overflow: 'hidden'
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  },
  stationText: {
    overflow: 'hidden'
  },
  h3: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '5px 1px'
  },
  description: {
    fontSize: '13px',
    margin: '0 0 5px 0'
  }
};

export class Singer extends Component {
  render() {
    return (
      <div className="station-container">
        <div className="image-container" style={ styles.singer }>
          <img className="img-responsive" style={ styles.image } src={ this.props.singer.imagePath } alt={ this.props.singer.name } />
        </div>
        <div className="station-text" style={ styles.stationText }>
          <h3 className="name" style={ styles.h3 }>
          { this.props.singer.name }
          </h3>
          <p className="description" style={ styles.description }>
            { this.props.singer.description }
          </p>
        </div>
      </div>
    );
  }
}
