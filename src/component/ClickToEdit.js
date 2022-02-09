import { useState, useRef } from 'react';
import '../css/common.css';
import '../css/clickToEdit.css';

function ClickToEdit() {
  // focus 속성 추가를 위한 ref
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  // 입력 데이터
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');
  // 하단에 보여질 데이터
  const [typedName, setTypedName] = useState('김코딩');
  const [typedAge, setTypedAge] = useState('20');
  // focus 유무 파악하는 boolen
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);

  const bodyOnClickHandler = (e) => {
    // name에 focus 있는 상태에서 외부 클릭하면 focus out
    if (isNameFocused && e.target !== document.getElementById('name')) {
      setIsNameFocused(false);
      setNewName();
    }
    // age에 focus 있는 상태에서 외부 클릭하면 focus out
    if (isAgeFocused && e.target !== document.getElementById('age')) {
      setIsAgeFocused(false);
      setNewAge();
    }
  };

  const setNewName = () => {
    if (typedName.trim() !== '') setName(typedName);
  };
  const nameOnChangeHandler = (e) => {
    setTypedName(e.target.value);
  };
  const nameOnKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setNewName();
    }
  };
  const nameOnClickHandler = async () => {
    await setIsNameFocused(true);
    nameRef.current.focus();
  };

  const setNewAge = () => {
    if (typedAge.trim() !== '') setAge(typedAge);
  };
  const ageOnChangeHandler = (e) => {
    setTypedAge(e.target.value);
  };
  const ageOnKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setNewAge();
    }
  };
  const ageOnClickHandler = async () => {
    await setIsAgeFocused(true);
    ageRef.current.focus();
  };

  return (
    <>
      <div className="title">ClickToEdit</div>
      <div className="ClickToEdit-body" onClick={(e) => bodyOnClickHandler(e)}>
        {isNameFocused ? (
          <div className="focus">
            <label htmlFor="name">이름</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              value={typedName}
              onChange={(e) => nameOnChangeHandler(e)}
              onKeyPress={(e) => nameOnKeyPressHandler(e)}
            ></input>
          </div>
        ) : (
          <div className="blur">
            <label>이름</label>
            <div className="box">
              <span onClick={nameOnClickHandler}>{name}</span>
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
              onChange={(e) => ageOnChangeHandler(e)}
              onKeyPress={(e) => ageOnKeyPressHandler(e)}
            ></input>
          </div>
        ) : (
          <div className="blur">
            <label>나이</label>
            <div className="box">
              <span onClick={ageOnClickHandler}>{age}</span>
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
