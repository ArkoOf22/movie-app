import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
//image
import searchIcon from '../../images/search-icon.svg'

//styles
import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }

    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          onChange={(e) => {
            setState(e.currentTarget.value)
          }}
          value={state}
          placeholder='Search Movie'
        />
      </Content>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
}

export default SearchBar
