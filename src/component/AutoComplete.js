import { useEffect, useState } from 'react';
import '../css/autoComplete.css';

function AutoComplete() {
  // 자동완성에 사용될 data
  const data = [
    'apple pie',
    'banana bread',
    'cupcake',
    'donut',
    'eclair',
    'froyo',
    'ginger bread',
    'ice cream sandwich',
    'jelly bean',
    'kitkat',
    'lolipop',
    'marshmallow',
    'nougat',
    'oreo',
    'pie',
    'quince tart',
    'red velvet cake',
    'sugar cookie',
    'tarte tatin',
    'ube cake',
    'vanilla ice cream',
    'walnut cookie',
    'xmax cake',
    'yam pie',
    'zepploe',
  ];

  // 검색창에 입력되는 keyword
  const [keyword, setKeyword] = useState('');
  // keyword를 포함하는 string만 들어있는 result array
  const [result, setResult] = useState([]);
  // result값 유무를 파악하는 boolean
  const [isResultEmpty, setIsResultEmpty] = useState(true);

  useEffect(() => {
    if (result.length > 0) {
      setIsResultEmpty(false);
      addClassName();
    } else {
      setIsResultEmpty(true);
      removeClassName();
    }
  }, [result]);

  const dataOnChangeHandler = (e) => {
    setKeyword(e.target.value);
    searchKeywordFromData(e.target.value);
  };

  const resetData = () => {
    setKeyword('');
    setResult([]);
  };

  // keyword 포함 여부 확인하는 function
  const isStringContainsKeyword = (string, keyword) => {
    keyword = keyword.trim();
    const len = keyword.length;

    if (len > 0 && string.includes(keyword)) return true;

    return false;
  };

  // keyword 포함하는 data만 result에 추가
  const searchKeywordFromData = (keyword) => {
    setResult(
      data.filter((string) => isStringContainsKeyword(string, keyword))
    );
  };

  // 자동완성 result 선택 시 keyword 완성하는 function
  const autoCompleteKeyword = (string) => {
    setKeyword(string);
    searchKeywordFromData(string);
  };

  const addClassName = () => {
    document.getElementById('AutoComplete-input').classList.add('haveResult');
  };

  const removeClassName = () => {
    document
      .getElementById('AutoComplete-input')
      .classList.remove('haveResult');
  };

  // 검색창 외부 클릭 시 reset하는 function
  const bodyOnClickHandler = (e) => {
    if (e.target === e.currentTarget) resetData();
  };

  // 검색 결과
  const results = result.map((res, idx) => (
    <div key={idx} className="result" onClick={() => autoCompleteKeyword(res)}>
      {res}
    </div>
  ));

  return (
    <div
      className="AutoComplete-container"
      onClick={(e) => bodyOnClickHandler(e)}
    >
      <div className="title">AutoComplete</div>
      <div className="AutoComplete-body">
        <input
          type="text"
          value={keyword}
          id="AutoComplete-input"
          className="AutoComplete-input"
          onChange={(e) => dataOnChangeHandler(e)}
        ></input>
        <button className="AutoComplete-button" onClick={resetData}>
          x
        </button>
        {!isResultEmpty ? <div className="resultList">{results}</div> : null}
      </div>
    </div>
  );
}

export default AutoComplete;
