import React from "react";

function BottomSide({ isim, hataMesaji, onChange, onSubmitClick }) {
  return (
    <React.Fragment>
      <input
        name="isim"
        placeholder="isminiz"
        value={isim}
        onChange={onChange}
      />
      <button onClick={onSubmitClick}>Giris</button>
      <br />
      {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giris yapiniz.</h2>}
    </React.Fragment>
  );
}

export default BottomSide;
