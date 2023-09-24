# Teszt
Ez a dokumentum a teszttervben felsorolt tesztek eredményeinek összegyűjtésére szolgál. A tesztelés folyamán szerzett információkat ebbe a dokumentumba fogjuk beilleszteni.

## 1. Működőképesség tesztelése
Elsősorban a megírt funkciók helyes működéséről győződünk meg. Ehhez a fejlesztők különböző erőforrású számítógépeken futtatják a programot, és jegyzetet készítenek az esetleges előforduló hibákról. 
Ha minden számítógépen gond nélkül fut, továbbhaladhatunk a fejlesztéssel. Amennyiben egy is hibát dob, a helyzetet kielemezzük, megkeressük a befolyásoló tényezőt és kijavítjuk azt, majd csak ezután haladunk tovább.

A tesztet legalább 2 különböző számítógépen végezzük el, de minél több esetet szeretnénk ellenőrizni. Akkor nevezhető a teszt sikeresnek, ha a tesztelésre használt eszközök legalább fele 2 évnél idősebb. Erre azért van szükség, mert komolyan vesszük a felhasználó-orientáltságot, és nem realisztikus az a feltevés, hogy terhelésnek alig kitett, új gépeken fogják használni a programunkat. Célunk az esélyegyenlőség, azaz, hogy bárki szabadon használni tudja a játékot.

Ennek érdekében több féle eszközön fogjuk a tesztelést futtatni. Az elsődleges eszközök:
| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    |
| AMD Ryzen 5  | 8GB  | 3 év    | Elégséges  |

Egyéb tesztelésre használt eszközök:
| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    |
|  Intel Core i5  | 8GB  | 6 év    | Kielégítő  |
|  AMD Ryzen 5  | 31GB  | <1 év    | Kiváló  |

### Eredmények
| Processzor | RAM  | Életkor | Állapot  |  Előfordult hiba  |
|------------|------|---------|----------|----|
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    |    |
| AMD Ryzen 5  | 8GB  | 3 év    | Elégséges  |    |

Egyéb tesztelésre használt eszközök:
| Processzor | RAM  | Életkor | Állapot  |  Előfordult hiba  |
|------------|------|---------|----------|-----|
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    |    |
|  Intel Core i5  | 8GB  | 6 év    | Kielégítő  |    |
|  AMD Ryzen 5  | 31GB  | <1 év    | Kiváló  |    |
