# BUDGET-PLANER

## Anwendung starten

`yarn start` startet die Backend-Anwendung (backend/server.js) und macht die index.html unter `http://localhost:3000` verfügbar.

### Teil 1 - HTML, CSS & JS kennenlernen

Aufgabe A & B können gleichzeitig bearbeitet werden.

#### Aufgabe A

Nimm folgende Änderungen an der index.html vor:

- Das "title"-Attribut der Seite verändern (z.B. "Budget Planer")
- Die Seite in 3 Teile aufteilen
  - "Header" -> Obere Leiste mit Titel nach Wahl (h1-Element)
  - "TopBar" -> Dreiteilige Leiste mit Flexbox die
    - ein input-Element enthält um Monat & Jahr auszuwählen
    - etwas beliebiges im mittleren Block anzeigt (z.B. Text, Bild oder einfach "nichts")
    - etwas beliebiges im rechten Block anzeigt (z.B. Text, Bild oder einfach "nichts")
  - "Content" -> Ein Block mit Textinhalt (p-Element), zwei beliebigen Bildern (img-Element) und einem Button ohne Funktion
    - Ein Bild kann als Quelle eine URL haben (z.B. ein Bild von der Google-Suche)
    - Ein Bild sollte über den Dateipfad geladen werden (Bild herunterladen und im "public"-Ordner ablegen)

> HTML head, title, div, h1, h2, h3..., img
> `<img src="...">`
> Relative Pfade; Absolute Pfade

> Das Backend zeigt auf den "public"-Ordner. Das heißt alle relativen Pfade nach `http://localhost:3000/` zeigen auf die Inhalte des "public"-Ordners.
> Beispiel: `public/assets/img/bild.jpg` kann über `http://localhost:3000/public/assets/img/bild.jpg` aufgerufen werden.

#### Aufgabe B

Füge eine CSS-Datei hinzu und verändere die Styles der Seite damit sie in etwa der Vorlage entsprechen.
Farben, Abstände, Schriften, Icons und Größen dürfen beliebig gewählt werden.

> https://developer.mozilla.org/de/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works

#### Aufgabe C

Binde eine JavaScript-Datei ein (app.js im "public"-Ordner), die folgende Funktionalitäten umsetzt:

- Beim Seitenaufruf soll ein Popup erscheinen mit dem Inhalt "Hallo Welt"
  - https://www.w3schools.com/jsref/met_win_alert.asp
- In der Konsole sollen mithilfe der Funktion `console.log()` folgende Werte ausgegeben werden:
  - Das heutige Datum
  - Den Seiten-Titel (Das was im Browser in der Fensterleiste oben steht / bzw. im Seitentab steht)

> JS Date-Klasse
> "MDN document"

---

### Teil 2 - JQuery

#### Aufgabe A

Ajax-Request beim Aufrufen der Seite

- Binde JQuery ein
- Rufe in der app.js den Backend-Endpunkt "/api/data" auf um Daten zu erhalten
- Gib den Response per `console.log` aus

> `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`

> JQuery Event Listener: https://api.jquery.com/on/#on-events-selector-data-handler

> Jquery GET-Request https://api.jquery.com/jQuery.get/

#### Aufgabe B

Der response in "/api/data" beinhaltet HTML-Markup.
Ersetze den aktuellen Inhalt des Content-Bereichs mit diesem markup.

> https://api.jquery.com/replaceWith/

#### Aufgabe C

Erstelle ein Eingabeformular am Anfang des Content-Bereichs mit:

- Input-Feld für eine Beschreibung bzw. eine Bezeichnung für den Eintrag
- Input-Feld für die Geldmenge
- Select-Feld für Kategorien
- Submit-Button um die Eingaben abzuschicken

Verwende sinnvolle Input-Typen und ein Formular-Element.

> https://wiki.selfhtml.org/wiki/HTML/Formulare

#### Aufgabe D

Fange das Submit-Event des Formulars mit JQuery ab.
y

- Fange das Submit-Event ab und sammle die Werte des Eingabeformulars ein und gib sie per console.log aus

```
$('#myElement').submit((event) => {
  event.preventDefault();
  console.log(event);
  // TODO: Alle Werte aus den Eingabefeldern per console.log einzeln ausgeben
});
```

#### Aufgabe E

Umgang mit Arrays und Objekten

- Gib die Länge des Arrays aus das vom Formular übertragen wurde (Aufgabe D)
- Durchlaufe das Array und gib jeden Wert (value) der Array-Elemente einzeln per console.log aus.
  - `$.each(array, function(element) {...})`
- Nimm beim obigen \$.each den Wert (value) des Elements und schreibe ihn in ein Objekt mit der Struktur:
  - { description: "Bezeichnung", amount: "Betrag", category: "Kategorie" }
  - Beispiel: https://www.w3schools.com/js/js_objects.asp
  - Gib das erstellte Objekt per console.log aus
- Erstelle ein leeres array und fülle es mit den oben erstellen objekten innerhalb der \$.each funktion
  - `var myData = []`
  - `myData.push(myObject)`

> https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array---

### Teil 3 - HTTP-Post-Request

Sende die Daten der Eingabefelder an das Backend

- Pfad: "/api/data"
- Form der Daten: { description: 'Text', amount: 123.42, category: 'Text' }
- Kein GET-Request sondern POST-Request!
- Bei Erfolgreichem Senden sollten die Daten aus Teil 2 Aufgabe B erneut geholt werden.

> https://api.jquery.com/jQuery.post/

---

### Teil 4 - Optional / Zusatz

#### Aufgabe A - Datum

- Elemente können auch ein Datum enthalten
  - { description: 'Text', amount: 123.42, category: 'Text', date: '...' }
- Backendroute muss nun auch das datum aus dem req.body ziehen
- app.js -> hier muss ein Datum erzeugt werden beim erstellen eines Eintrages (new Date()) und als "date" wert dem info Objekt hinzugefügt werden.
- Gib in der server.js Datei bei der POST Route die Daten per console.log aus um sicherzustellen, dass der Date Wert nun dabei ist.

#### Aufgabe B - Zeige nur die Einträge vom heutigen Datum (Oder vom aktuellen Monat)

> https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date

- Beim ersten GET-Request in der app.js muss das aktuell ausgewählt Datum von unserem Datumsfeld mitgegeben werden.
- `$('.klasseDesDatumFeldes').val()`
- In der server.js muss dann noch mit \$.each das data array durchlaufen werden und überprüft werden ob das dortige Datum dem empfangenen Datum vom Request entspricht.
