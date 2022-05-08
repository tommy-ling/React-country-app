import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { MenuItem, Select, FormControl, InputLabel, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './Countries.css'

function Countries({ countries }) {
  const [showCountries, setShowCountries] = useState(countries)
  const [searchVal, setSearchVal] = useState("")
  const [filterVal, setFilterVal] = useState("")

  useEffect(() => {
    if(showCountries.length) {
      setShowCountries(showCountries)
    } else {
      setShowCountries(countries)
    }
  })

  const handleSearch = (e) => {
    setSearchVal(e.target.value)
    if(e.target.value) {
      setShowCountries(showCountries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))        
    }
    // else {
    //   setShowCountries(countries)
    // }
  }
  const handleFilter = (e) => {
    setFilterVal(e.target.value)
    if(e.target.value !== 'All') {
      setShowCountries(showCountries.filter(country => country.region === e.target.value))
    } else if(e.target.value === 'All') {
        setShowCountries(showCountries.filter(country => country.region === e.target.value))
      }
  }
  return (
    <div className="Countries-container">
      <div className="Countries-toolbar">
      <TextField className="Countries-search" 
      onChange={handleSearch}
      label={
        <Fragment>
          <SearchIcon />Search for a country...
        </Fragment>} />
      <FormControl className='Countries-select'>
        <InputLabel>Filter by Region</InputLabel>
        <Select label="filter-by-region" value={filterVal} onChange={handleFilter}>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
          <MenuItem value="Antarctic">Antarctic</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className="Countries">
        {showCountries.map(country => (
          <div className="card"
          key={country.name.common}
          style={showCountries.indexOf(country) % 4 !== 3 ? {margin: '2rem 5% 2rem 0'} : {margin: '2rem 0'}}>
            <img className="card-img-top" src={country.flags[1]} alt="Card image cap" />
            <div className="card-body">
              <Link className="Country-link" to={`/country/${country.name.common}`}>
              <h5 className="card-title">{country.name.common}</h5>
              </Link>
              <p><span>Population: </span>{country.population.toLocaleString()}</p>
              <p><span>Region: </span>{country.region}</p>
              <p><span>Capital: </span>{country.capital[0] ? country.capital[0] : "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countries