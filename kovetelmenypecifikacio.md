# Követelmény Specifikáció

  Az alkalmazás célja egy könnyed webes felülettel rendelkező mini játék létrehozása, ami tökéletes rövid időtöltésre. Az alkalmazás alapvetően egy “Gondoltam egy számra” alapú játék. 
(Fruzsi)

## Jelenlegi helyzet leírása

  Van az a pillanata az embernek, amikor nem talál módot arra, hogy elüsse az időt. Nem akar haszontalan dologba kezdeni, de olvasni vagy megnézni egy filmet meg túl sok időt venne igénybe. Egy egyszerű tippjáték egyszerre lehet izgalmas (a maga módján) és hasznos is, ugyanis fejleszti az intuíciót. Elég gyakorlással, talán egyszer a lottót is megnyerjük. 
  A játék megfelelő, ha valami egyszerű időtöltésre vágyunk. Viszonylag rövid játékmenetek lehetnek, ha könnyebb nehézséget választunk, és egészen hosszúak is, ha nehezebbet. Ezáltal a játékos bármennyi szabadidővel rendelkezik, a játék alkalmas lesz annak kitöltésére.
(Fruzsi)

## Vágyálom rendszer leírása

  Kezdetben a játékos megadhat magának egy becenevet, ami majd a ranglistában való tároláshoz szükséges. A program a nehézség kiválasztása és a start gomb megnyomása után generál egy random számot a kiválasztott nehézség alapján lévő számtartományban. A játékos feladata, hogy kitalálja ezt a számot. A felugró ablakba beírhatja a tippelt számot, majd a program válaszként megadja, hogy a kisebb, vagy nagyobb-e, mint a kitalálandó szám. A program specifikusabb választ is képes megadni, például kicsit kisebb a szám, vagy sokkal nagyobb a szám. A játékos rendelkezésére áll több tippelési lehetőség is. A játék végkimenetele kétféle lehet, van egy feladom opció, ami kiírja a megfejtendő számot, vagy ha a játékos helyesen tippel, akkor felugrik egy győztes ablak, ami kiírja, hogy hány lépésben tudta az illető kitalálni a számot. Ezt követően a játékos lépésszáma a megadott becenévvel együtt tárolódik a ranglistában, amit szintén megtekinthetnek a felhasználók. Opció új játék kezdése, vagy visszalépés a főoldalra, ahol új becenév adható meg játékos változás esetén.
  
  A program fejlesztésére java nyelvet választottunk, ami elősegíti a könnyű mozgatást akár több platform között is. 
(Fruzsi)

## A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása

  A rendszer a Szoftverfejlesztési Módszertanok tárgy követelményeinek kell, hogy megfeleljen.
Néhány általános jogi követelmény a programmal szemben:
* Szerzői jogok: A program nem szegheti meg mások szerzői jogait, és a használt forrásoknak meg kell felelnie a szoftverlicenc feltételeinek.
* Szabályozási követelmények: A programnak meg kell felelnie azoknak a szabályozási követelményeknek, amelyek az adott iparágban vagy régióban érvényesek.
* Hátrányos kódolás: A programnak nem szabad hátrányosan megkülönböztetnie embereket faj, vallás, nemzetiség vagy egyéb személyes jellemzők alapján.
* 
(Rebeka)

## Jelenlegi üzleti folyamatok modellje

A projekt célja, hogy olyan időtöltésként szolgáljon, ami nem terheli túl az embert a mai rohanó világban. Minden időtöltési lehetőség, játék, társasjáték nagyon komplikálttá vált az idők során. Az egyébként is rohanó nap közepén csak még nagyobb terhelés 1-1 ilyen fárasztóan komplex dologgal elütni az időt. Ezért van szükség ilyen egyszerű és alacsony figyelmet igénylő 'játékra'.
1.0 - A program megnyitása
1.1 - A játék elindítása => a szám legenerálása => a grafikus felület frissítése
1.2 - A tippek beírása => a tipp a kitalálandó számhoz való viszonyítása
1.3 - A szám kitalálása => a tippek számának kiíratása
1.4 - A ranglétra képernyő megjelenítése => az eredmény elmentése fájlba => az Új Játék gomb megjelenítése
(Rebeka)
## Igényelt üzleti folyamatok modellje

A játékos a kezdőlapon szeretné megadni a becenevét, majd kiválasztani egy, a hangulatához illő szintet. Ezután a szintnek megfelelő tartományon belül generálásra kerül egy szám, amit egy rublikába írás után a felhasználó megpróbálhat megtippelni. A felhasználónak igénye van arra, hogy a program irányítsa, mennyire van távol a tippelendő számtól.
(Rebeka)
## Követelménylista

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
(Ákos)


## Irányított és szabad szöveges riportok szövege

- Mennyi időt vesz igénybe a játék folyamata?   -  5-15 perc között, szinttől függően
- Hányszor játszható a játék?  -   Nincs limit
- Kinek alkalmas ez a játék?  -   Nemtől, kortól függetlenül bárkinek
(Ákos)

## Fogalomszótár
  Java  -  Java egy erősen típusos, objektumorientált programozási nyelv. A Java alkalmazások platformfüggetlenek, mivel a Java bytecode virtuális gépen (JVM) futnak, így bármilyen platformon futtathatók. Az erős közösségi támogatás és a széles körben elterjedt használata miatt a Java egy népszerű választás vállalati és webalkalmazások fejlesztéséhez.
  
  Javafx  -  JavaFX egy Java platformon futó modern grafikus felhasználói felület (GUI) keretrendszer. Ez lehetővé teszi a fejlesztők számára, hogy könnyedén építsenek interaktív és esztétikus felhasználói felületeket Java alkalmazásaikhoz.
(Ákos)
