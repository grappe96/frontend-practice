import { useState } from 'react';
import '../css/common.css';
import '../css/tab.css';

function Tab() {
  // tab 하단에 보여지는 content
  const [tabNumber, setTabNumber] = useState('ONE');

  return (
    <>
      <div className="title">Tab</div>
      <div className="Tab-body">
        <button className="Tab-button" onClick={() => setTabNumber('ONE')}>
          Tab1
        </button>
        <button className="Tab-button" onClick={() => setTabNumber('TWO')}>
          Tab2
        </button>
        <button className="Tab-button" onClick={() => setTabNumber('THREE')}>
          Tab3
        </button>
      </div>
      <div className="Tab-comment">
        <p>Tab menu {tabNumber}</p>
      </div>
    </>
  );
}

export default Tab;
