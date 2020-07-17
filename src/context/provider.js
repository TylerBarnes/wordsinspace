import React, {useState} from 'react'

export const searchContext = React.createContext();

const Provider = props => {
	const [searchTerm, setSearchTerm] = useState('');

  return (
    <searchContext.Provider value={{
      searchTerm,
      updateSearch: _searchTerm => setSearchTerm(_searchTerm)
    }}>
      {props.children}
    </searchContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);