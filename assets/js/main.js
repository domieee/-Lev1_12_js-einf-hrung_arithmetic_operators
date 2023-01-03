// Übertrage folgende arithmetische Operatoren in deinen Code-Editor und schaue dir das Ergebnis an: 

// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
let scoreOne = (5 + 5) * 10;
console.log('Ergebnis: ' + score);

// Du kannst Werte auf Variablen addieren.
let scoreTwo = 0;
score = score + 10;
console.log('Ergebnis: ' + score);

// Hiervon gibt es eine verkürzte Version.
score += 10;
console.log('Ergebnis: ' + score);

// Nun probiere es hiermit: 

// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
// zahl = zahl + 1;
// zahl += 1;


// Verwende Inkrement-Operatoren
zahl++;
console.log('increment: ' + zahl);
    // 1 + 1 = 2 > Der Inkrement-Operator inkrementiert die gegebene Variable um die Summe 1                                                           


// Verwende Dekrement-Operatoren
zahl--;
console.log('dekrement: ' + zahl);
    // 2 - 1 = 1 > Der Dekrement-Operator dekrementiert die gegebene Variable um die Summe 1  
