import '../css/common.css';
import '../css/toggle.css';
import { useState } from 'react';

function Toggle() {
  const [isChecked, setIsChecked] = useState(false);
  const checkEventHandler = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="title">Toggle</div>
      <div className="toggle-body">
        <label className="toggle-button">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => checkEventHandler(e)}
          />
          <span className="toggle-switch" />
        </label>
        {isChecked ? (
          <div className="notice">Toggle Switch ON</div>
        ) : (
          <div className="notice">Toggle Switch OFF</div>
        )}
      </div>
    </>
  );
}

export default Toggle;
