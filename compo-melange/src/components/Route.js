import { useContext } from 'react';
import NavigationContext from '../context/navigation';


function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);
  console.warn('HEERER')
  console.log(path);
  console.log(children);
  console.log(currentPath);

  return children;
  // if (path === currentPath) {
  //   return children;
  // }
  
  // return null;
}


export default Route;
