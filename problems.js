problems = {
 "P0": {
  "title": "Counting Vowels",
  "a": ["'COOLAPL'",
   "''","'NVWLSHR'",
   "{⍵[?⍨≢⍵]}'AEIOU',⎕A[?26⍴⍨9+?16]"],
  "b": ["2 3⍴'APLYES'",
   "⎕A[?26⍴⍨1+?2⍴⍨1+?2]",
   "''⍴⍨¯1+?⍨3"],
  "f": "{+/,⍵∊'AEIOU'}",
  "p": "{⊃⍣(1=≢,⍵)⊢⍵}"
 },
 "P1": {
  "title": "Making the Grade",
  "a": ["(14 15 92 65 35 89 79)",
   "(0,⍳100)",
   "(¯1+?101⍴⍨?2⍴⍨1+?2)"],
  "b": ["(2 2⍴61 80 33 100)",
   "(¯1+?101)"],
  "f": "{'FDCBA'[0 65 70 80 90⍸⍵]}",
  "p": "819⌶"
 },
 "P2": {
  "title": "Telephone Names",
  "a": ["'IAMYY4U'",
   "'UR2CUTE'"],
  "b": ["''","(⎕D,⎕A)[?26⍴⍨4+?15]","⎕D,⎕A"],
  "f": "{∊10|⍸¨↓⍵∘.∊'1' '2ABC' '3DEF' '4GHI' '5JKL' '6MNO' '7PQRS' '8TUV' '9WXYZ' '0'}",
  "p": ","
 },
 "P3": {
    "title": "Grille Cypher",
    "a": [["5 5⍴'### # ### # # ### ###  ##'","5 5⍴'VRYIALCLQIFKNEVPLARKMPLFF'"]],
    "b": [["⎕A[5 3 4⍴26]","'# '[?5 3 4⍴2]"]],
    "f": "{(∊⍺=' ')/∊⍵}",
    "p": ""
  },
  "P4": {
    "title": "Moving Average",
    "a": [["3","4 5 5 3 4 1 2"],["?8","?10⍴100"]],
    "b": [["2","3 8⍴2 5 1 5 67 45 321 43"],["?5","?3 10⍴10"]],
    "f": "{⍺+/⍵}",
    "p": ""
  }
}