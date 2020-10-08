import React, { useState, useRef } from 'react';

import { default as Button } from '../button/button.component';

const useStoryComponents = () => {
  const [dialog, setDialog] = useState(null);
  const closeButton = <Button onClick={() => setDialog(null)}>Close</Button>;
  const ref = useRef();

  return { dialog, setDialog, closeButton, ref };
};

export default useStoryComponents;
