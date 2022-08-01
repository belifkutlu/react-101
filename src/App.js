import React, { useState } from "react";
import BottomSide from "./components/BottomSide";
import TopSide from "./components/TopSide";

import "./styles.css";

export default function App() {
  const [isim, setIsim] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [hataMesaji, setHataMesaji] = useState("");
  const handleChange = (event) => setIsim(event.target.value);
  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("kullanici ismi en az 6 karakter olmalidir");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {girisYapildi || <p>cikis yapildi</p>}{" "}
      {/*giris yapildi true ise ekranda bir sey gormeyecegiz cunku true bisey gostermiyor, false oldugunda <p>cikis yapildi</p> gorecegiz */}
      {girisYapildi && <p>giris yapildi</p>}{" "}
      {/* kisa devre/ burada gecis varsa kullanici gorebiliyor */}
      {/*giris yapildi true ise <p>giris yapildi</p> giris yapildi false oldugunda ekranda bisey gormecegiz */}
      {girisYapildi ? (
        <TopSide isim={isim} onLogout={() => setGirisYapildi(false)} />
      ) : (
        <BottomSide
          isim={isim}
          hataMesaji={hataMesaji}
          onChange={handleChange}
          onSubmitClick={() => handleSubmit(isim)}
        />
      )}
    </div>
  );
}
