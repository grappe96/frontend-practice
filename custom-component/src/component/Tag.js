import { useState } from 'react';
import '../css/common.css';
import '../css/tag.css';

function Tag() {
  const [tagArr, setTagArr] = useState([]);
  const [idx, setIdx] = useState(0);

  const onFocusHandler = () => {
    document.getElementById('container').classList.add('clicked');
  };
  const onBlurHandler = () => {
    document.getElementById('container').classList.remove('clicked');
  };

  const tags = tagArr.map((item) => (
    <div key={item.id} className="Tag-item">
      <label className="Tag-name">
        {item.name}
        <button className="Tag-button" onClick={() => deleteTag(item.id)}>
          x
        </button>
      </label>
    </div>
  ));

  const keyPressHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTag = {
        name: e.target.value,
        id: idx,
      };
      setTagArr([...tagArr, newTag]);
      setIdx(idx + 1);
      e.target.value = '';
    }
  };

  const deleteTag = (id) => {
    setTagArr(tagArr.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="title">Tag</div>
      <div className="Tag-container" id="container">
        <div className="Tag-body">{tags}</div>
        <input
          type="text"
          placeholder="Press enter to add tags"
          onKeyPress={(e) => keyPressHandler(e)}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          className="Tag-input"
        />
      </div>
    </>
  );
}

export default Tag;
