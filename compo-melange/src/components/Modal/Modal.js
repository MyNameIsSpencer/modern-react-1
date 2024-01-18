

import ReactDOM from 'react-dom';
import { useEffect } from 'react';

export default function Modal({ children }) {

  return ReactDOM.createPortal(
    <div>
      Modal Time
    </div>,
    document.getElementById('.modal-portal')
  );
}



