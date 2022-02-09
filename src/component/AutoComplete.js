import { useEffect, useState } from 'react';
import '../css/autoComplete.css';

function AutoComplete() {
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

  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
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

  const dataChangeHandler = (e) => {
    setKeyword(e.target.value);
    searchKeywordFromData(e.target.value);
  };

  const resetData = () => {
    setKeyword('');
    setResult([]);
  };

  const isStringContainsKeyword = (string, keyword) => {
    keyword = keyword.trim();
    const len = keyword.length;

    if (len > 0 && string.includes(keyword)) return true;

    return false;
  };

  const searchKeywordFromData = (keyword) => {
    setResult(
      data.filter((string) => isStringContainsKeyword(string, keyword))
    );
  };

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

  const bodyClickHandler = (e) => {
    if (e.target === e.currentTarget) resetData();
  };

  const results = result.map((res, idx) => (
    <div key={idx} className="result" onClick={() => autoCompleteKeyword(res)}>
      {res}
    </div>
  ));

  return (
    <div
      className="AutoComplete-container"
      onClick={(e) => bodyClickHandler(e)}
    >
      <div className="title">AutoComplete</div>
      <div className="AutoComplete-body">
        <input
          type="text"
          value={keyword}
          id="AutoComplete-input"
          className="AutoComplete-input"
          onChange={(e) => dataChangeHandler(e)}
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
