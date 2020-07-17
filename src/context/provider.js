import React, {useState, createContext} from 'react'

export const myContext = React.createContext(null)

const Provider = props => {
  const [isDark, setTheme] = useState(false);

  return (
    <myContext.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
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