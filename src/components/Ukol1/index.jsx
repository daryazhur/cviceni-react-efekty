import { useEffect } from "react";
/*
Zadání: Upravte efekt v této komponentě tak, aby se při KAŽDÉM vykreslení komponenty v konzoli objevil
  text „Jsem tady“.

Poznámka: Nemáte jak prakticky ověřit, že se to zobrazí při každém vykreslení – protože React nemá
  žádný důvod vykreslovat komponentu opakovaně. Důležité je vyzkoušet si ten zápis useEffectu pouze
  s jedním parametrem.
*/

export const Ukol1 = () => {
  useEffect(() => {
    console.log('jsem tady') // vypíše do konzole při každém renderu
  }); // druhý parametr odstraněn

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
