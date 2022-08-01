import React from "react";

export default function TopSide({ isim, onLogout }) {
  return (
    <React.Fragment>
      <h2>Hosgeldiniz, {isim}</h2>
      <button onClick={onLogout}>Cikis Yap</button>
    </React.Fragment>
  );
}
