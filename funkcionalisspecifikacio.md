# Funkcionális Specifikáció

## Áttekintés

Az alkalmazás célja egy könnyed webes felülettel rendelkező mini játék létrehozása, ami tökéletes rövid időtöltésre. Az alkalmazás alapvetően egy “Gondoltam egy számra” alapú játék, ahol a felhasználó tippelgetéssel juthat el a játék végére. Lehetőség van különböző nehézségi szintek között választani, feladni esetlegesen, vagy siker esetén a pontszámát is megtudja az illető. A folyamat egyszerű, a program generál egy random számot, a felhasználó tippel, a játék válaszként megadja, hogy a kitalálandó szám kisebb/nagyobb, és a játékos tippelhet tovább. Ez egy szimpla időtöltő program, ami egyszerű, de rengeteg időt el lehet vele tölteni. A program java nyelvben íródik, ezért más platformon megjeleníteni viszonylag egyszerű feladat.

## Jelenlegi helyzet

Van az a pillanata az embernek, amikor nem talál módot arra, hogy elüsse az időt. Nem akar haszontalan dologba kezdeni, de olvasni vagy megnézni egy filmet meg túl sok időt venne igénybe. Egy egyszerű tippjáték egyszerre lehet izgalmas (a maga módján) és hasznos is, ugyanis fejleszti az intuíciót. Elég gyakorlással, talán egyszer a lottót is megnyerjük. A játék megfelelő, ha valami egyszerű időtöltésre vágyunk. Viszonylag rövid játékmenetek lehetnek, ha könnyebb nehézséget választunk, és egészen hosszúak is, ha nehezebbet. Ezáltal a játékos bármennyi szabadidővel rendelkezik, a játék alkalmas lesz annak kitöltésére. 

## Követelmény lista

| Modul       | ID  | Név               | V   | Kifejtés                                       |
|-------------|-----|-------------------|-----|------------------------------------------------|
| Jogosultság | L1  | Névadás           | 1.0 | A felhasználó nevének megadása                |
| Modifikáció | M1  | Nehézség választás| 1.0 | A játék nehézségének kiválasztása             |
| Modifikáció | M2  | Név-rangsorba     | 1.0 | Név leadása a ranglistára                     |
| Feladat     | F1  | Start             | 1.0 | Start gomb ami átad a játékfelületre          |
| Feladat     | F2  | Tipp              | 1.0 | Mező ahova a tippet írjuk                     |
| Feladat     | F3  | Check             | 1.0 | Gomb ami a tippet leellenőrzi és kiírja hogy kisebb vagy nagyobb, vagy eltaláltuk és átrak a rangsor kijelzőre |
| Feladat     | F4  | Feladás           | 1.0 | Feladás gomb amivel feladhatjuk              |
| Jogosultság | L2  | Rangsor           | 1.0 | Rangsor kijelző                               |
| Jogosultság | L3  | Új játék          | 1.0 | Új játék indítása                              |

## Jelenlegi üzleti folyamatok modellje

A projekt célja, hogy olyan időtöltésként szolgáljon, ami nem terheli túl az embert a mai rohanó világban. Minden időtöltési lehetőség, játék, társasjáték nagyon komplikálttá vált az idők során. Az egyébként is rohanó nap közepén csak még nagyobb terhelés 1-1 ilyen fárasztóan komplex dologgal elütni az időt. Ezért van szükség ilyen egyszerű és alacsony figyelmet igénylő 'játékra'.

## Igényelt üzleti folyamatok modellje

Szerettünk volna egy időtöltésre alkalmas, szórakozató minijátékot létrehozni. Mivel a játék egyszerű, ezért bármely korosztály számára megfelelő időtöltés lehet, nem igényel komplex tudást. A játékos szabadidejének mértékétől függetlenül jó választás lehet a játék. A játékmenet nem igényel különösebb odafigyelést. A játékos a kezdőlapon szeretné megadni a becenevét, majd kiválasztani egy, a hangulatához illő szintet. Ezután a szintnek megfelelő tartományon belül generálásra kerül egy szám, amit egy rublikába írás után a felhasználó megpróbálhat megtippelni. A felhasználónak igénye van arra, hogy a program irányítsa, mennyire van távol a tippelendő számtól.

## Használati esetek

ADMIN: Az ADMIN beléphet mindegyik más szerepkörbe, hogy az hibamentes működését ellenőrizhesse. Az Admin(ok) feladata a rendszer problémamentes működése. Ez egyben jár azzal, hogy az egész rendszerhez van hozzáférésük. Hozzá tudnak férni a ranglistához, és módosítani tudják azt probléma vagy hibás eredmény esetén.

FELHASZNÁLÓ: A FELHASZNÁLÓ az alkalmazás alapvető funkcióit tudja használni. Tud nevet megadni, új játékot kezdeni, feladni/végigjátszani azt, és a végén látja saját illetve mások eredményét is. 

## Megfeleltetés, hogyan fedik le a használati esetek a követelményeket 

-

## Képernyő tervek

Külön dokumentumban mellékelve. 

## Forgatókönyv

Az első szereplő maga a futó alkalmazás. Megjelenik a rublika, amit a játékos becenevével ki kell töltenie, illetve a nehézség választó. Ezzel van interakcióban a második szereplő, maga a felhasználó, akinek már itt feladata van a kitöltés formájában. Ha elvégzi a szükséges beavatkozásokat, akkor indulhat a játék.

## Funkció - követelmény megfeleltetés 

-

## Fogalomszótár

Java  -  Java egy erősen típusos, objektumorientált programozási nyelv. A Java alkalmazások platformfüggetlenek, mivel a Java bytecode virtuális gépen (JVM) futnak, így bármilyen platformon futtathatók. Az erős közösségi támogatás és a széles körben elterjedt használata miatt a Java egy népszerű választás vállalati és webalkalmazások fejlesztéséhez.
  
Javafx  -  JavaFX egy Java platformon futó modern grafikus felhasználói felület (GUI) keretrendszer. Ez lehetővé teszi a fejlesztők számára, hogy könnyedén építsenek interaktív és esztétikus felhasználói felületeket Java alkalmazásaikhoz.

## Pozitív felhasználói élmény biztosítása
- Felhasználóbarát GUI:
      - A grafika felhasználói felületnek könnyen használhatónak kell lennie
      - Egyértelműség: a GUI-nak egyértelműnek kell lennie a félreértés elkerülése érdekében
      - Ergonómikus kialakítás: a felhasználói felületnek olvashatónak, könnyen átláthatónak kell lennie felhasználói eszköztől függetlenül
  - Reszponzív, mobil kialakítás:
      - Fontos, hogy okostelefonokon, tableteken kényelmesen és jól használhatóan jelenjen meg a weboldal
      - Gyors letöltődési sebesség
