import React from 'react';

import Well from './well.component';

export default { title: 'Well' };

export const Standard = () => {
  return (
    <>
      <Well>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="error">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success">
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
      <Well variant="outlined">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>

      <Well severity="error" variant="outlined">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success" variant="outlined">
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
      <Well variant="filled">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="error" variant="filled">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is some content for the detail element:</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>lorem ipsum</span>
          <span>some footer content</span>
        </div>
      </Well>
      <Well severity="success" variant="filled">
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
