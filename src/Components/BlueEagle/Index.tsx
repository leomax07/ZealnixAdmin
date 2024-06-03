import BlueEagleIcon from "../../assets/blueEagle.svg";

function BlueEagle() {
  return (
    <div className="blue__eagle__container">
      <div className="header__icon">
        <img alt="blue-eagle" src={BlueEagleIcon} />
      </div>
      <p className="header__title">Garuda</p>
    </div>
  );
}

export default BlueEagle;
