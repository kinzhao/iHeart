import React, {Component} from 'react';
import axios from 'axios';

import {Singer} from './singer';

const styles = {
  container: {
    margin: '1rem'
  },
  searchContainer: {
    width: '278px',
    margin: '0 auto 16px auto'
  },
  searchInput: {
    width: '100%',
    height: '25px'
  },
  singers: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Singers extends Component {
    constructor(props) {
        super(props);
        this.state = { singers: [] };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      axios.get('/singers')
        .then(response => {
          this.setState({ singers: response.data });
        });
    }

    handleChange(event) {
      event.preventDefault();
      const query = event.target.value;

      axios.get(`/search/${query}`)
        .then((response) => {
          this.setState({ singers: response.data });

        })
        .catch((error) => console.log(error));
    }

  render() {
    const singers = this.state.singers;
    return (
        <div style={styles.container}>
            <form id="searchbox" style={styles.searchContainer}>
              <label>
                <input
                  type="text"
                  search="search"
                  style={styles.searchInput}
                  onChange={this.handleChange}
                  />
              </label>
            </form>
            <div className="stations-container" style={styles.singers}>
              {singers.map((singer, i) => (
                <Singer key={i} singer={singer}/>
              ))}
            </div>
        </div>
    );
  }
}
