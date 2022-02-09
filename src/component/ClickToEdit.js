import { useState, useRef } from 'react';
import '../css/common.css';
import '../css/clickToEdit.css';

function ClickToEdit() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');
  const [typedName, setTypedName] = useState('김코딩');
  const [typedAge, setTypedAge] = useState('20');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);

  const bodyClickHandler = (e) => {
    if (isNameFocused && e.target !== document.getElementById('name')) {
      setIsNameFocused(false);
      setNewName();
    }
    if (isAgeFocused && e.target !== document.getElementById('age')) {
      setIsAgeFocused(false);
      setNewAge();
    }
  };

  const setNewName = () => {
    if (typedName.trim() !== '') setName(typedName);
  };
  const nameChangeHandler = (e) => {
    setTypedName(e.target.value);
  };
  const nameKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setNewName();
    }
  };

  const clickName = async () => {
    await setIsNameFocused(true);
    nameRef.current.focus();
  };

  const setNewAge = () => {
    if (typedAge.trim() !== '') setAge(typedAge);
  };
  const ageChangeHandler = (e) => {
    setTypedAge(e.target.value);
  };
  const ageKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setNewAge();
    }
  };
  const clickAge = async () => {
    await setIsAgeFocused(true);
    ageRef.current.focus();
  };

  return (
    <>
      <div className="title">ClickToEdit</div>
      <div className="ClickToEdit-body" onClick={(e) => bodyClickHandler(e)}>
        {isNameFocused ? (
          <div className="focus">
            <label htmlFor="name">이름</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              value={typedName}
              onChange={(e) => nameChangeHandler(e)}
              onKeyPress={(e) => nameKeyPressHandler(e)}
            ></input>
          </div>
        ) : (
          <div className="blur">
            <label>이름</label>
            <div className="box">
              <span onClick={clickName}>{name}</span>
            </div>
          </div>
        )}
        {isAgeFocused ? (
          <div className="focus">
            <label htmlFor="age">나이</label>
            <input
              ref={ageRef}
              type="text"
              id="age"
              value={typedAge}
              onChange={(e) => ageChangeHandler(e)}
              onKeyPress={(e) => ageKeyPressHandler(e)}
            ></input>
          </div>
        ) : (
          <div className="blur">
            <label>나이</label>
            <div className="box">
              <span onClick={clickAge}>{age}</span>
            </div>
          </div>
        )}
        <label>
          이름 {name} 나이 {age}
        </label>
      </div>
    </>
  );
}

export default ClickToEdit;
