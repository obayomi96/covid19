import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SearchResult from "../SearchResult";
import { API_URL, formatDate } from '../../utils';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: '',
      searchedCountry: '',
      country: '',
      searchedCountryConfirmed: '',
      searchedCountryRecovered: '',
      searchedCountryDeaths: '',
      lastUpdate: '',
      searchedCountrylastUpdate: '',
    }
  }

  componentDidMount = async () => {
    const res = await axios.get(API_URL);
    const date = formatDate(res.data.lastUpdate);
    this.setState({
      data: res.data,
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value,
      lastUpdate: date,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { searchedCountry } = this.state;
    try {
      const res = await axios.get(`${API_URL}/countries/${searchedCountry}`);
      if (searchedCountry !== '') {
        const date = formatDate(res.data.lastUpdate);
        this.setState({
          country: searchedCountry,
          searchedCountryConfirmed: res.data.confirmed.value,
          searchedCountryRecovered: res.data.recovered.value,
          searchedCountryDeaths: res.data.deaths.value,
          searchedCountrylastUpdate: date,
          searchedCountry: '',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          text: 'Please enter a valid country',
          showConfirmButton: false,
          timer: 1500,
          toast: true
        });
      }
    } catch(error) {
      if (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          text: `Nothing found for your search '${searchedCountry}'`,
          showConfirmButton: false,
          timer: 2500,
          toast: true
        });
        this.setState({
          searchedCountry: '',
        })
      }
    }
  }

  render() {
    const {
      confirmed,
      recovered,
      deaths,
      country,
      searchedCountry,
      searchedCountryConfirmed,
      searchedCountryRecovered,
      searchedCountryDeaths,
      searchedCountrylastUpdate,
      lastUpdate,
    } = this.state;
    return (
      <div>
        <header className="App-header">
          <h3
            style={{
              color: 'gray',
              cursor: 'pointer',
            }}
          >
            COVID-19 real time tracker
        </h3>
          <div className="search-div">
            <form onSubmit={this.handleSubmit}>
              <input
                className="search-bar"
                type="text"
                name="searchedCountry"
                value={searchedCountry}
                placeholder="Search country..."
                onChange={this.handleChange}
              />
              <input
                className="submit-btn"
                type="submit"
                name="submit"
                onSubmit={this.handleSubmit}
              />
            </form>
          </div>
        </header>
        <div className="landing-div">
          <div className="case-value">
            <h3 style={{ color: 'orange' }}>Confirmed {confirmed}</h3>
          </div>
          <div className="case-value">
            <h3 style={{ color: 'green' }}>Recovered {recovered}</h3>
          </div>
          <div className="case-value">
            <h3 style={{ color: 'red' }}>Deaths {deaths}</h3>
          </div>
        </div>
        <h3 className="updatedAt">Last updated at {lastUpdate}</h3>
        {
          searchedCountryConfirmed !== '' ?
            <SearchResult
              countryName={country.toUpperCase()}
              confirmed={searchedCountryConfirmed}
              recovered={searchedCountryRecovered}
              deaths={searchedCountryDeaths}
              latestUpdate={searchedCountrylastUpdate}
            />
          : ''
        }
      </div>
    );
  }
}

export default Landing;
