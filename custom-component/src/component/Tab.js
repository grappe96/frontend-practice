import { useState } from 'react';
import '../css/common.css';
import '../css/tab.css';

function Tab() {
  const [tabNumber, setTabNumber] = useState('ONE');

  return (
    <>
      <div className="title">Tab</div>
      <div className="Tab-body">
        <button class="Tab-button" onClick={() => setTabNumber('ONE')}>
          Tab1
        </button>
        <button class="Tab-button" onClick={() => setTabNumber('TWO')}>
          Tab2
        </button>
        <button class="Tab-button" onClick={() => setTabNumber('THREE')}>
          Tab3
        </button>
      </div>
      <div class="Tab-comment">
        <p>Tab menu {tabNumber}</p>
      </div>
    </>
  );
}

export default Tab;
