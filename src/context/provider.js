import React, {useState} from 'react'

export const myContext = React.createContext();

const Provider = props => {
	const [searchTerm, setSearchTerm] = useState('e');

  return (
    <myContext.Provider value={{
      searchTerm,
      updateSearch: _searchTerm => setSearchTerm(_searchTerm)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);