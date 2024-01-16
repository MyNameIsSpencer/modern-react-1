import { createContext, useState, useEffect } from 'react';


const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState('localhost:3000');

  useEffect(() => {
    // console.warn('HEEERRR')
    // console.log(window.location.pathname);
    // console.log(currentPath)

    const handler = () => {
      setCurrentPath(window.location.pathname)
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const navigate = (destinationPath) => {
    window.history.pushState({}, '', destinationPath);
    setCurrentPath(destinationPath);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;

