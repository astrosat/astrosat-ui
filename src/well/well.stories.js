import React from 'react';

import Well from './well.component';

export default { title: 'Well' };

export const Standard = () => {
  return (
    <>
      <Well severity="info" variant="outlined" icon={false}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="error" variant="outlined" errorIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success" variant="outlined" successIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
    </>
  );
};

export const Outlined = () => {
  return (
    <>
      <Well severity="info" variant="standard" icon={false}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>

      <Well severity="error" variant="standard" errorIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success" variant="standard" successIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
    </>
  );
};

export const Filled = () => {
  return (
    <>
      <Well severity="info" icon={false}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="error" errorIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success" successIcon>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
    </>
  );
};
