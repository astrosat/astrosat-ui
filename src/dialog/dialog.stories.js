import React, { useState, useRef } from 'react';

import { default as Button } from '../button/button.component';

import { default as Dialog } from './dialog.component';

export default { title: 'Dialog' };

export const Default = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Open Dialog</Button>

      <Dialog open={isVisible} ref={ref}>
        <div>I Am A Dialog</div>
      </Dialog>
    </>
  );
};
