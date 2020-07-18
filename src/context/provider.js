import React, {useState} from 'react'

export const searchContext = React.createContext();

const Provider = props => {
	const [searchTerm, setSearchTerm] = useState('');
  const [searchInfoVisible, setSearchInfo] = useState(false);

  return (
    <searchContext.Provider value={{
      searchTerm,
      updateSearch: _searchTerm => setSearchTerm(_searchTerm),
      searchInfoVisible,
      isSearchInfoVisible: (_searchInfoVisible) => setSearchInfo(_searchInfoVisible),
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