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

Mind a felhasználó, mind az admin képes a követelménylistán szereplő elemekhez hozzáférni, manipulálni azokat. Az admin fő célja ezeket tesztelés során kezelni, és a projektünk esetében fontos, hogy ugyanolyan képet kapjon a játékról, mint amilyen a felhasználó elé kerül. Ennek indoka, hogy a tesztelés során kiszűrjük a lehetséges fejlesztői hibákat, és megbizonyosodjunk, hogy ezek élettani hatása nem negatív.

### Névadás
A GUI-n lehetőség van felhasználónév megadására, ez billentyűzetről kerül beolvasásra. Jól látható helyen, jól olvasható felirattal működik.

### Nehézségválasztás
Itt lehetőség van a játék midifikálására, az erre szolgáló gombok segítségével.

### Start, Check, Feladás
Mindegyik a játék előrehaladását befolyásolja. Hozzájuk jól látható gomb kerül rendelésre, így egyetlen kattintással haladunk.

### Tipp
Egy mező, amely billentyűről olvas. A játék egyik legfontosabb része, a felhasználó a saját tippjét tudja elhelyezni itt.

### Rangsor
Az admin/felhasználó meg tudja tekinteni, hogy milyen eredményt ért el. A ranglista lokális, azaz nem látja a listában a másik számítógépen egyidőben lejátszott játék eredményét.

## Képernyő tervek

Külön dokumentumban mellékelve. 

## Forgatókönyv

Az első szereplő maga a futó alkalmazás. Megjelenik a rublika, amit a játékos becenevével ki kell töltenie, illetve a nehézség választó. Ezzel van interakcióban a második szereplő, maga a felhasználó, akinek már itt feladata van a kitöltés formájában. Ha elvégzi a szükséges beavatkozásokat, akkor indulhat a játék.

## Funkció - követelmény megfeleltetés 

### Névadás
Billentyűzetről beolvasásra kerül egy felhasználónév. Ennek hosszát ellenőrizni tudja egy függvény, illetve a ranglista megjelenítésénél előhívható.

### Nehézségválasztás
Lehetőséget ad különböző szintek létrehozására. A kezdőlapon választott gombnak megfelelően a szükséges randomszám-generátor fog lefutni.

### Név-rangsorba
A bekért felhasználónév bekerül a rangsorba.

### Start
Egy olyan gomb, amely át tud irányítani a játékfelületre.

### Tipp
Egy mező, amely billentyűzetről olvas. A befogadott érték átadódik egy azt ellenőrző függvénynek, amely tájékoztatni tudja a játékost, hogy milyen közel van a tippelendő értékhez.

### Check
A Tipp mezőn befogadott értéket tudja leellenőrizni, majd tájékoztatni a játékost. Előnye, hogy indecizív játékosaink több időt kapnak átgondolni a tippjeiket, az általuk beírt érték nem kerül kiértékelésre, amíg ez a gomb nem érzékel kattintást.

### Feladás
Olyan gomb, amely ha kattintást érzékel, megállítja az értékbekérést, befejezettnek tekinti a játékot. Lehetőséget biztosít a játék idő előtti befejezésére.

### Rangsor
Egy olyan felület, amely visszaadja a játékos becenevét és a lépéseinek számát. 

### Új játék
Egy olyan gomb, amelynek segítségével új játékot kezdhetünk.

## Fogalomszótár

JavaScript - A JavaScript egy szkriptnyelv, amit webfejlesztésre használnak. Dinamikus típusú és eseményvezérelt, lehetővé teszi az interaktív weboldalak készítését. A böngészőkben fut, és képes a DOM manipulálására, valamint aszinkron műveletek kezelésére is.

HTML - Az HTML (HyperText Markup Language) egy szövegalapú kódolási nyelv, amit a weboldalak struktúrájának és tartalmának leírására használnak. Az HTML elemei segítségével lehetőség van címsorok, szövegek, képek, linkek, táblázatok, űrlapok és más tartalmi elemek megjelenítésére a weboldalon. A böngészők HTML kódot értelmeznek és megjelenítik a felhasználóknak, így lehetővé téve a weboldalak böngészését és interakcióját. Az HTML a webfejlesztés alapvető építőköve, és más technológiákkal, például CSS (Cascading Style Sheets) és JavaScripttel együtt használják a modern weboldalak készítéséhez.

CSS - A CSS (Cascading Style Sheets) egy stílusleíró nyelv, amit a weboldalak megjelenítésének formázására és dizájnjának meghatározására használnak. 

Bootstrap - A Bootstrap egy nyílt forráskódú, előre elkészített webfejlesztési keretrendszer, amely stílusokat, komponenseket és JavaScript funkciókat kínál a reszponzív és modern weboldalak és webalkalmazások készítéséhez. 

## Pozitív felhasználói élmény biztosítása
- Felhasználóbarát GUI:

      - A grafika felhasználói felületnek könnyen használhatónak kell lennie
  
      - Egyértelműség: a GUI-nak egyértelműnek kell lennie a félreértés elkerülése érdekében
  
      - Ergonómikus kialakítás: a felhasználói felületnek olvashatónak, könnyen átláthatónak kell lennie felhasználói eszköztől függetlenül
  
- Reszponzív, mobil kialakítás:
    
      - Fontos, hogy okostelefonokon, tableteken kényelmesen és jól használhatóan jelenjen meg a weboldal
        
      - Gyors letöltődési sebesség
