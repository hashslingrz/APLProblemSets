testString = "TestSolution←{0::'eRRt0KEN',⍨⊃⎕DM\nrepObj←{\n ⍺←0\n P←'(',')',⍨⍕\n 10::P⍣⍺⊢'0(220⌶)0(219⌶)',∊P¨2 9(219⌶)1(220⌶)⍵\n (⊢⊣⍎){\n s←⍵/⍨~≠''''=⍵ ⋄ p←s/⍨0=+-⌿'()'∘.=s ⋄ b←p/⍨0=+-⌿'[]'∘.=p ⋄ ∨/'⊂,⍴+-×/⍳'∊p:P ⍵ ⋄ ⍵\n }⍣⍺{\n ⍵≡⍬:'⍬' ⋄ ⍵≡'':'''''' ⋄ ⍵≡⎕NULL:'⎕NULL'\n ⍵≡⎕D:'⎕D' ⋄ ⍵≡⎕A:'⎕A' ⋄ ⍵≡⎕Á:'⎕Á' ⋄ ⍵≡⎕AV:'⎕AV'\n scal←0∊rank←+/⍴s←⍴⍵ ⋄ char←>/(simple num)←∧\\~(10|⎕DR 1/⍵)∊¨6(0 2)\n ⍺←0\n (rc ref)←2↑⍺\n or←scal∧1=≡R←⍵\n or∨9=⎕NC'R':ref{⍵⊣÷⍺}⍕⍵\n mod←(0<rank)∧(n=0)∨(5×char)<n←×/s\n mod←mod∧as←char{0∊⍴⍵:1 ⋄ ⍵∧.≡1↑⍵}obj←,⍵\n obj←mod{16::⊂'[ref]' ⋄ 1(↑⍣⍺)⍵}obj\n shape←mod{⍵≡,1:',' ⋄ (⍺∨1<⍴⍵)/'⍴',⍨⍕⍵}s\n shape←shape,(encl←simple<as)⍴'⊂'\n parens←rc∧simple≤(0<⍴shape)∨(rank=1)∧num∨∨/(4↑⎕AV)∊⍵\n (lp rp)←parens⍴¨'()'\n Paren←{>/'⎕' 'ADÁN'∊¨⍨2↑⍵:P ⍵ ⋄ ⍵}\n ~simple:rp,⍨lp,shape,encl{⍺⍲'('=1↑⍵:⍵ ⋄ 1↓¯1↓⍵}1↓⊃,/' ',¨Paren¨1 ref∘∇¨obj\n ⎕PP←17\n cmpv←{⎕CT←⎕IO←0\n ∨/e←(0∊s),⍬≡s←⍴v←⍵:⍕e/'⍬',1↑v\n ⍺←4 ⋄ ⍺≥s:⍕v↑⍨⍺⌊s\n d←{⍵>¯1⌽1 1 0⍷⍵}{1,⍵,⍨1↑⍵}2≠/2-/v\n s←-+/lim←{(⍵>1⌽⍵)∨⍵>¯1↓0,⍵}d\n addp←(s↑1)<s≠¯1\n r←1↓⊃,/addp{d v←⍵ ⋄ ∧/d:',',⍕v\n lp←'[('[⍺] ⋄ rp←⍺/')' ⋄ ap←{',',lp,⍵,rp}\n 0=∆←-⍨/2⍴v:ap(⍕⍴v),'/',⍕1⍴v\n A←(nz←0≠t)/⍕t←1⍴v\n A,←nz/'+'\n B←(t≠1)/(⍕t←∆),'×'\n C←'⎕io-⍨⍳',⍕⍴v\n (⍴d←⍕v)>⍴t←A,B,C:ap t\n ',',d\n }¨↓⍉↑lim∘⊂¨d v\n b←(','=r)⍲(¯1⌽r=')')⍱1⌽r∊'[('\n (b\\b\/r)~'['\n }\n obj←shape,num ⍺{1↑⍺:cmpv ⍵ ⋄ ⎕ML←1 ⋄ ⎕IO←0 ⋄ QU←{Q,((1+t=Q)/t←⍵),Q←''''}\n Always←⎕A,⎕D,'abcdefghijklmnopqrstuvwxyz_.,:;%!\"/=-+''#$£¢^¿¡(){}[]§@`∣¶&'\n Always,←'ÁÂÃÇÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝþãìðòõÀÄÅÆÉÑÖØÜßàáâäåæçèéêëíîïñùúûüóôöø'\n Always,←'≤≥⌿⍀<>≠∨∧÷×?∊⍴~↑↓⍳○*⌈⌷¨⌊∇∆⍙⍨∘⊂⊃∩∪⊥⊤⌶|⍺⍵¯⍬⍱⍲⍒⍋⍉⌽⊖⍟⌹⍕⍎⍫⍪≡≢⍷⋄←→⍝⎕⍞⍣ '\n Always,←'⊢⊣',⎕UCS 8838 9016 9018 9056 9060 9080/⍨80=⎕DR''\n ∧/t←⍵∊Always:QU ⍵\n UCS←{1⌽')(⎕ucs ',⍕cmpv ⎕UCS ⍵}\n minsize←3\n c∨←minsize>∊⍴¨c←ucs⊂⍨c←1,1↓ucs≠¯1⌽ucs←~t\n (lp rp)←'()'/⍨¨(1↓⍺)∧1<+/c←1,1↓ucs≠¯1⌽ucs←∊c\n rp,⍨lp,∊{⍺,',',⍵}/(c/ucs){⍺:UCS ⍵ ⋄ QU ⍵}¨c⊂⍵\n }obj\n lp,obj,rp\n }⍵\n }\n a←⎕JSON ⍺ ⋄ b e←⍵{\n 0::⍎¨¨⍵.(a b)\n ⍎¨¨¨⍵.(a b)}a\n disp←{⎕IO ⎕ML←0 1 ⋄ ⍺←⍬ ⋄ dec ctd←2↑⍺\n box←{\n isor ⍵:⎕FMT⊂⍵\n 1=≡,⍵:dec open ⎕FMT dec open ⍵\n mat←matr 1/dec open ⍵\n r c←×⍴mat\n dec<0∊r c:c/r⌿∇ 1 open mat\n subs←aligned ∇¨mat\n (≢⍴⍵)gaps ⍵ plane subs\n }\n aligned←{ ⋄ rows cols←sepr⍴¨⍵ ⋄ sizes←(⌈/rows)∘.,⌈⌿cols ⋄ ctd=0:sizes↑¨⍵ ⋄ v h←sepr⌈0.5×↑(⍴¨⍵)-sizes ⋄ v⊖¨h⌽¨sizes↑¨⍵ ⋄ }\n gaps←{ ⋄ ⍺≤2:⍵ ⋄ subs←(⍺-1)∇¨⍵ ⋄ width←⊃⌽⍴⊃subs ⋄ fill←(⍺ width-3 0)⍴' ' ⋄ ↑{⍺⍪fill⍪⍵}/1 open subs ⋄ }\n plane←{ ⋄ 2<⍴⍴⍺:⍺ join ⍵ ⋄ odec←(dec shape ⍺)outer ⍵ ⋄ idec←inner ⍺ ⋄ (odec,idec)collect ⍵ ⋄ }\n join←{ ⋄ sep←(≢⍵)÷1⌈≢⍺ ⋄ split←(0=sep|⍳≢⍵)⊂[0]⍵ ⋄ (⊂⍤¯1⊢⍺)plane¨split ⋄ }\n outer←{ ⋄ sizes←1 0{⊃↓(⍉⍣⍺)⍵}¨sepr⍴¨⍵ ⋄ sides←sizes/¨¨'│─' ⋄ bords←dec↓¨'├┬'glue¨sides ⋄ ↑,¨/('┌' '')⍺ bords'└┐' ⋄ }\n inner←{ ⋄ deco←{(type ⍵),1 shape ⍵} ⋄ sepr deco¨matr dec open ⍵ ⋄ }\n collect←{ ⋄ lft top tt vv hh←⍺ ⋄ cells←vv right 1 open tt hh lower ⍵ ⋄ boxes←(dec∨0∊⍴⍵)open cells ⋄ lft,top⍪↑⍪⌿,/boxes ⋄ }\n right←{ ⋄ types←2⊥¨(⍳⍴⍵)=⊂¯1+⍴⍵ ⋄ chars←'┼┤┴┘'[types] ⋄ rgt←{⍵,(-≢⍵)↑(≢⍵)1 1/'│',⍺} ⋄ ((matr 1 open ⍺),¨chars)rgt¨⍵ ⋄ }\n lower←{ ⋄ bot←{⍵⍪(-1⊃⍴⍵)↑⍺ split ⍵} ⋄ split←{((¯2+1⊃⍴⍵)/'─')glue ⍺} ⋄ (matr↑,¨/⍺)bot¨matr ⍵ ⋄ }\n type←{ ⋄ dec<|≡⍵:'─' ⋄ isor ⍵:'∇' ⋄ sst←{ ⋄ 0=dec×⍴⍴⍵:'─' ⋄ (⊃⍵∊'¯',⎕D)⊃'#~' ⋄ }∘⍕ ⋄ 0=≡⍵:sst ⍵ ⋄ {(1=⍴⍵)⊃'+'⍵}∪,sst¨dec open ⍵ ⋄ }\n shape←{ ⋄ dec≤0=⍴⍴⍵:⍺/¨'│─' ⋄ cols←(×¯1↑⍴⍵)⊃'⊖→' ⋄ rsig←(××/¯1↓⍴⍵)⊃'⌽↓' ⋄ rows←(¯1+3⌊⍴⍴⍵)⊃'│'rsig'⍒' ⋄ rows cols ⋄ }\n matr←{↑,↓⍵} ⋄ sepr←{+/¨1⊂↑⍵} ⋄ open←{16::(1⌈⍴⍵)⍴⊂'[ref]' ⋄ (⍺⌈⍴⍵)⍴⍵} ⋄ isor←{1 ⍬≡(≡⍵)(⍴⍵)} ⋄ glue←{0=⍴⍵:⍵ ⋄ ↑⍺{⍺,⍺⍺,⍵}/⍵}\n isor ⍵:⎕FMT⊂⍵ ⋄ 1=≡,⍵:⎕FMT ⍵ ⋄ box ⍵\n }\n b e←{1≠≡⍵:repObj¨⍵ ⋄ repObj ⍵}¨¨b e\n test←a.f∘{0::⍎∊(⊆⍺),(⊆⍵) ⋄ ⍎∊'(',(⊃⍵),')',(⍺)(2⊃⍵)}¨¨b e\n user←⍵∘{0::⍎∊(⊆⍺),(⊆⍵) ⋄ ⍎∊'(',(⊃⍵),')',(⍺)(2⊃⍵)}¨¨b e\n r←(⊃∧+/)user≡¨test ⋄\n 0=r:user{\n 2≠≢⊃⊃⍵:∊('Incorrect.<br />Your log:<br /><pre class=\"apl\">      '),(⊃⌽⍵),(,'<br>',⍤1⍨⊃⊃⍵),'<br>','</pre>eRRt0KEN',⍨(,'<br>',⍤1⍨disp⊃⊃⍺)\n ∊('Incorrect.<br />Your log:<br /><pre class=\"apl\">      '),('(',')',⍨repObj⍎⍕⊃⊃⊃⍵),(⊃⌽⍵),(repObj⍎⍕2⊃⊃⊃⍵),'<br>','</pre>eRRt0KEN',⍨(,'<br>',⍤1⍨disp⊃⊃⍺)}b ⍵\n r,'eRRt0KEN'\n }";