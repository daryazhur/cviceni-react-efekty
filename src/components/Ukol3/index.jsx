/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce `setTimeout` po 3 vteřinách
  od prvního zobrazení komponenty v konzoli vypíše text „Jsem tady“.
*/

import {useEffect} from 'react'

export const Ukol3 = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Jsem tady')
    }, 3000)

    return () => clearTimeout(timer) // funkce pro vyčištění zajistí, že pokud by se komponenta odmontovala dříve než po 3 vteřinách, časovač bude zrušen, aby se předešlo potenciálním chybám
  }, [])

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
