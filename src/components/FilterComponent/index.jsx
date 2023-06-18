/* eslint-disable react/prop-types */
import { Filter, InputBox, NavBar, NavItem, SearchBar, SearchButton, SearchIcon } from './styles'

const FilterComponent = ({ items, placeholder }) => {
  return (
    <Filter>
      <NavBar>
        {Object.keys(items).map((item, index) => (
          <NavItem key={index}>{items[item]}</NavItem>))}
      </NavBar>
      <SearchBar>
        <InputBox placeholder={placeholder}/>
        <SearchButton><SearchIcon /></SearchButton>
      </SearchBar>
    </Filter>
  )
}

export default FilterComponent