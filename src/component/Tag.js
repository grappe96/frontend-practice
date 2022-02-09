import { useState } from 'react';
import '../css/common.css';
import '../css/tag.css';

function Tag() {
  // 입력된 tag 저장하는 array
  const [tagArr, setTagArr] = useState([]);
  // tag에 부여할 고유 id
  const [idx, setIdx] = useState(0);

  const onFocusHandler = () => {
    document.getElementById('container').classList.add('clicked');
  };
  const onBlurHandler = () => {
    document.getElementById('container').classList.remove('clicked');
  };

  // 입력 후 보여지는 tag
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

  const onKeyPressHandler = (e) => {
    // 입력 후 enter 눌렀을 때
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
        <div className="Tag-body">
          {tags}
          <input
            type="text"
            placeholder="Press enter to add tags"
            onKeyPress={(e) => onKeyPressHandler(e)}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            className="Tag-input"
          />
        </div>
      </div>
    </>
  );
}

export default Tag;
