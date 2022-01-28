import '../css/alert.css';

function Alert(props) {
  return (
    <>
      {props.isOpen ? (
        <div className="Alert-body">
          <div className="Alert">
            <button className="Alert-button" onClick={props.close}>
              x
            </button>
            <div className="content">{props.content}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Alert;
