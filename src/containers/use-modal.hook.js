import { useState } from 'react';

const useModal = visibility => {
  const [isVisible, setIsVisible] = useState(visibility);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return [isVisible, toggle];
};

export default useModal;
