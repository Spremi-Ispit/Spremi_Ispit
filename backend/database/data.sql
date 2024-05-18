INSERT INTO `user` (`username`, `email`, `password`, `role`) VALUES
('Admin', 'admin@spremiispit.com','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC', 'admin'), -- password = P@ssw0rd1234
('a','a@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('b','b@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('c','c@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('d','d@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor');

UPDATE user
SET banned = true
where username='a';



INSERT INTO `department`(`name`) VALUES
('Opšti'),
('Računarstvo i informatika'),
('Upravljanje sistemima'),
('Telekomunikacije'),
('Elektronika'),
('Elektronske komponente i mikrosistemi'),
('Elektroenergetika');



INSERT INTO `year_of_study`(`name`) VALUES
('I'),
('II'),
('III'),
('IV'),
('V');


INSERT INTO `yearOfStudyOnDepartment` (`departmentId`, `yearOfStudyId`) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(2, 4),
(3, 4),
(4, 4),
(5, 4),
(6, 4),
(7, 4);


INSERT INTO `examination_period`(`name`) VALUES
('Januar'),
('Mart'),
('April'),
('Jun'),
('Jun2'),
('Septembar'),
('Oktobar'),
('Oktobar2'),
('Decembar');



INSERT INTO `year_of_exam`(`name`) VALUES
('2001'),
('2002'),
('2003'),
('2004'),
('2005'),
('2006'),
('2007'),
('2008'),
('2009'),
('2010'),
('2011'),
('2012'),
('2013'),
('2014'),
('2015'),
('2016'),
('2017'),
('2018'),
('2019'),
('2020'),
('2021'),
('2022'),
('2023'),
('2024');


INSERT INTO `type`(`name`) VALUES
('Blanket'),
('Skripta'),
('Lab'),
('Kolokvijum I'),
('Kolokvijum II'),
('Predavanja'),
('Racunske');


INSERT INTO `subject`(`name`) VALUES
-- I GODINA
('Algoritmi i programiranje'), -- 1
('Elektronske komponente'),
('Fizika'),
('Laboratorijski praktikum - Fizika'),
('Matematika I'),
('Matematika II'),
('Osnovi elektrotehnike I'),
('Osnovi elektrotehnike II'),
('Uvod u elektroniku'),
('Uvod u inženjerstvo'),
('Uvod u računarstvo'), -- 11
-- II GODINA, Računarstvo i informatika
('Arhitektura i organizacija računara'), -- 12
('Arhitektura i organizacija računara 1'),
('Arhitektura i organizacija računara 2'),
('Baze podataka'),
('Digitalna elektronika'),
('Diskretna matematika'),
('Logičko projektovanje'),
('Matematički metodi u računarstvu'),
('Objektno orijentisano programiranje'),
('Programski jezici'),
('Računarski sistemi'),
('Strukture podataka'),
('Teorija grafova'),
('Verovatnoća i statistika'), -- 25
-- II GODINA, Upravljanje sistemima
('Digitalna elektronika'), -- 26
('Električna kola'),
('Linearni sistemi automatskog upravljanja'),
('Matematika III'),
('Metrologija električnih veličina'),
('Mikrokontroleri i programiranje'),
('Modeliranje i simulacija dinamičkih sistema'),
('Operaciona istraživanja'),
('Osnovi elektronike'),
('Računarski sistemi'), -- 35
-- II GODINA, Telekomunikacije 
('Digitalna elektronika'), -- 36
('Električna kola i signali'),
('Elektromagnetika-odabrana poglavlja'),
('Matematika 4'),
('Matematika III'),
('Osnovi elektronike'),
('Osnovi mikrotalasne tehnike'),
('Osnovi telekomunikacija'),
('Teorija telekomunikacija'), -- 44
-- II GODINA, Elektronika 
('Analogna elektronika'), -- 45
('Digitalna elektronika'),
('Digitalna obrada signala'),
('Električna i elektronska merenja'),
('Matematika III'),
('Objektno orijentisane tehnike projektovanja sistema'),
('Osnovi elektronike'),
('Signali i sistemi'),
('Telekomunikacije'), -- 53
-- II GODINA, Elektronske komponente i mikrosistemi
('Matematika III'), -- 54
('Materijali za elektroniku'),
('Metrologija električnih veličina'),
('Osnovi elektronike'),
('Osnovi optike'),
('Poluprovodničke komponente'),
('Projektovanje materijala za elektroniku'),
('Signali i sistemi'),
('Telekomunikacije'), -- 62
-- II GODINA, Elektroenergetika 
('Distributivne i industrijske mreže'), -- 63
('Električna kola'),
('Električne instalacije'),
('Elektromehaničko pretvaranje energije'),
('Elektrotehnički materijali'),
('Matematika III'),
('Merenja u elektroenergetici'),
('Metrologija električnih veličina'),
('Modeliranje i simulacija dinamičkih sistema'),
('Osnovi elektronike'),
('Prenos električne energije'),
('Tehnička mehanika'),
('Transformatori i mašine jednosmerne struje'), -- 75
-- III GODINA, Računarstvo i informatika
('Automatsko upravljanje'), -- 76
('Distribuirani sistemi'),
('Elektronska merenja'),
('Engleski jezik I'),
('Engleski jezik II'),
('Informacioni sistemi'),
('Interakcija čovek-računar'),
('Mikroračunarski sistemi'),
('Objektno orijentisano projektovanje'),
('Operativni sistemi'),
('Osnovi analize signala i sistema'),
('Projektovanje i analiza algoritama'),
('Računarske mreže'),
('Sistemi baza podataka'),
('Softversko inženjerstvo'),
('Telekomunikacije'),
('Uvod u teoriju igara'),
('Web programiranje'), -- 93
-- III GODINA, Upravljanje sistemima
('Baze podataka'), -- 94
('Bežični komunikacioni sistemi'),
('Digitalna obrada signala'),
('Digitalni sistemi automatskog upravljanja'),
('Elektromehanicko pretvaranje energije'),
('Elektronska merenja'),
('Informacioni sistemi'),
('Kablovski i optički komunikacioni sistemi'),
('Komercijalni softver za simulaciju dinamičkih sistema'),
('Mehatronika'),
('Merenje neelektričnih veličina'),
('Mikroračunarski sistemi'),
('Modulacione tehnike'),
('Nelinearni SAU'),
('Objektno-orijentisano programiranje'),
('Optimalno upravljanje'),
('Osnovi energetske elektronike'),
('Programabilni logički kontroleri'),
('Senzori i pretvarači u vozilima'),
('Senzori i pretvarači u automatici i robotici'),
('Sistemi automatskog upravljanja'),
('Solarne komponente i sistemi'),
('Telekomunikacije'),
('Upravljanje procesima'), -- 117
-- III GODINA, Telekomunikacije
('Digitalne telekomunikacije I'), -- 118
('Elektroakustika'),
('Mikrotalasna tehnika'),
('Obrada signala u telekomunikacijama'),
('Telekomunikacione mreže'),
('Teorija informacija'), -- 123
-- III GODINA, Elektronika
('Engleski jezik I'), -- 124
('Engleski jezik II'), -- 125
-- III GODINA, Elektronske komponente i mikrosistemi
('Analogna mikroelektronika'), -- 126
('Engleski jezik I'),
('Engleski jezik II'),
('Novi materijali i tehnologije'),
('Optoelektronika'),
('Projektovanje štampanih ploča'),
('Tehnologije mikrosistema'), -- 132
-- III GODINA, Elektroenergetika 
('Automatsko upravljanje'), -- 133
('Dijagnostika i monitoring električnih veličina'),
('Elektroenergetske komponente'),
('Elektromagnetika'),
('Elektronska merenja'),
('Energetska elektronika'),
('Kvalitet električne energije'),
('Mašine naizmenične struje'),
('Upravljanje procesima'), -- 141
-- IV GODINA, Računarstvo i informatika
('Arhitektura i projektovanje softvera'), -- 142
('Inteligentni informacioni sistemi'),
('Metodi i sistemi za obradu signala'),
('Mobilni sistemi i servisi'),
('Multimedijalni računarski sistemi'),
('Napredne baze podataka'),
('Paralelni sistemi'),
('Prepoznavanje uzoraka'),
('Pretraživanje informacija'),
('Programski prevodioci'),
('Projektovanje računarskih mreža'),
('Projektovanje računarskog hardvera'),
('Računarska grafika'),
('Socijalni i pravni aspekti informatike'),
('Veštačka inteligencija'),
('Zaštita informacija'), -- 157
-- IV GODINA, Upravljanje sistemima
('Dinamika mehanizama i mašina'), -- 158
('Diskretna matematika'),
('Elektroenergetski pretvarači'),
('Elektromotorni pogoni'),
('Elektronika u medicini'),
('Elektronska merna instrumentacija'),
('Engleski jezik I'),
('Engleski jezik II'),
('Identifikacija sistema'),
('Inženjerska etika'),
('Izvori za napajanje'),
('Merenja u ekologiji'),
('Merenja u medicini'),
('Projektovanje sistema automatskog upravljanja'),
('Računarski merno-informacioni sistemi u industriji'),
('SCADA sistemi'),
('Sistemi za akviziciju podataka'),
('Softversko inženjerstvo'),
('Tehnika konverzije'),
('Termovizija'),
('Uvod u robotiku'),
('Verovatnoća i statistika'), -- 179
-- IV GODINA, Telekomunikacije 
('Mobilni komunikacioni sistemi'), -- 180
('Antene i prostiranje'),
('Feding i smetnje u digitalnim telekomunikacijama'),
('Kodovanje'),
('Komunikaciona akustika'),
('Optičke mreže'),
('Širokopojasne telekomunikacije'), -- 186
-- IV GODINA, Elektronika
('Digitalna obrada slike'), -- 187
('Izvori za napajanje'),
('Mikrokontroleri'),
('Obnovljivi izvori energije'),
('Sistemi za rad u realnom vremenu'), -- 191
-- IV GODINA, Elektronske komponente i mikrosistemi
('Izvori za napajanje'), -- 192
('Komponente i kola snage'),
('Obnovljivi izvori energije'),
('Projektovanje i simulacija mikroelektronskih komponenata'),
('Projektovanje mikrosistema'),
('Solarne komponente i sistemi'), -- 197
-- IV GODINA, Elektroenergetika
('Distribuirana proizvodnja električne energije'), -- 198
('Elektrane'),
('Elektroenergetski pretvarači'),
('Elektromotorni pogoni'),
('Izvori za napajanje'),
('Odabrana poglavlja iz elektromotornih pogona'),
('Zaštita u elektroenergetici'); -- 204

INSERT INTO `subject`(`name`) VALUES
-- II GODINA, Elektronika
  ('Objektno-orijentisano programiranje'), -- 205
  ('Numerička matematika'),
  ('Mikroprocesorski sistemi'),
  ('Multimedijalni sistemi'),
  ('Animacije 1'),
  ('Metrologija električnih veličina'),
  ('Elektronska kola i embeded sistemi'), -- 211
-- III GODINA, Elektronika
  ('Računarske mreže'), -- 212
  ('Digitalna obrada slike'),
  ('Animacija 2'),
  ('Akustika'),
  ('Tehnike prikupljanja i konverzije podataka'),
  ('Obnovljivi izvori energije'),
  ('Obrada audio i muzičkog signala'),
  ('Mikrokontroleri'),
  ('Elektronika za multimedijalne sisteme'),
  ('Video produkcija'),
  ('Web tehnologije 1'),
  ('Fotografija'),
  ('Arhitekture digitalnih sistema'),
  ('Impulsna i digitalna elektronska kola'),
  ('Mikroprocesorska tehnika'),
  ('Analogna integrisana kola'),
  ('Osnovi energetske elektronike'),
  ('Projektovanje digitalnih integrisanih kola'),
  ('Projektovanje digitalnih sistema'),
  ('Virtuelni instrumenti'),
  ('Medicinska elektronika'),
  ('Projektovanje analognih integrisanih kola'),
  ('Automatsko upravljanje'), -- 234
-- IV GODINA, Elektronika
  ('Računarske igre'), -- 235
  ('Kamera i montaža'),
  ('Poslovne komunikacije'),
  ('Inženjersko obrazovanje i održivi razvoj'),
  ('Audio produkcija'),
  ('Autoelektronika'),
  ('Programiranje mobilnih uređaja'),
  ('Solarne komponente i sistemi'),
  ('Primenjena elektromagnetika'),
  ('Osnove mehatronike'),
  ('Uvod u robotiku'),
  ('Programabilni logički kontroleri'),
  ('Web tehnologije 2'),
  ('TV sistemi'),
  ('Računarske igre 2'),
  ('Virtuelna realnost'),
  ('Grafički dizajn'),
  ('Projektovanje računarskih mreža'),
  ('Termovizija'),
  ('Bežične mreže i uređaji'),
  ('Mobilni komunikacioni sistemi'),
  ('Kablovski i optički komunikacioni sistemi'),
  ('Internet stvari'),
  ('SCADA sistemi'),
  ('Stručna praksa'),
  ('Završni rad - istraživački rad'),
  ('Završni rad'),
  ('Projektovanje VLSI'),
  ('RF elektronika'),
  ('Sistemi za rad u realnom vremenu'),
  ('Testiranje elektronskih kola'),
  ('Jezici za modelovanje hardvera'),
  ('Elektroenergetski pretvarači'),
  ('Embeded sistemi'),
  ('Funkcionalna verifikacija'),
  ('Projektovanje elektronskih sistema'),
  ('Programiranje ARM kontrolera'),
  ('Izvori napona napajanja'); -- 272

INSERT INTO `subjectOnDepartment` (`departmentId`, `subjectId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 22),
(2, 23),
(2, 24),
(2, 25),
(3, 26),
(3, 27),
(3, 28),
(3, 29),
(3, 30),
(3, 31),
(3, 32),
(3, 33),
(3, 34),
(3, 35),
(4, 36),
(4, 37),
(4, 38),
(4, 39),
(4, 40),
(4, 41),
(4, 42),
(4, 43),
(4, 44),
(5, 45),
(5, 46),
(5, 47),
(5, 48),
(5, 49),
(5, 50),
(5, 51),
(5, 52),
(5, 53),
(6, 54),
(6, 55),
(6, 56),
(6, 57),
(6, 58),
(6, 59),
(6, 60),
(6, 61),
(6, 62),
(7, 63),
(7, 64),
(7, 65),
(7, 66),
(7, 67),
(7, 68),
(7, 69),
(7, 70),
(7, 71),
(7, 72),
(7, 73),
(7, 74),
(7, 75),
(2, 76),
(2, 77),
(2, 78),
(2, 79),
(2, 80),
(2, 81),
(2, 82),
(2, 83),
(2, 84),
(2, 85),
(2, 86),
(2, 87),
(2, 88),
(2, 89),
(2, 90),
(2, 91),
(2, 92),
(2, 93),
(3, 94),
(3, 95),
(3, 96),
(3, 97),
(3, 98),
(3, 99),
(3, 100),
(3, 101),
(3, 102),
(3, 103),
(3, 104),
(3, 105),
(3, 106),
(3, 107),
(3, 108),
(3, 109),
(3, 110),
(3, 111),
(3, 112),
(3, 113),
(3, 114),
(3, 115),
(3, 116),
(3, 117),
(4, 118),
(4, 119),
(4, 120),
(4, 121),
(4, 122),
(4, 123),
(5, 124),
(5, 125),
(6, 126),
(6, 127),
(6, 128),
(6, 129),
(6, 130),
(6, 131),
(6, 132),
(7, 133),
(7, 134),
(7, 135),
(7, 136),
(7, 137),
(7, 138),
(7, 139),
(7, 140),
(7, 141),
(2, 142),
(2, 143),
(2, 144),
(2, 145),
(2, 146),
(2, 147),
(2, 148),
(2, 149),
(2, 150),
(2, 151),
(2, 152),
(2, 153),
(2, 154),
(2, 155),
(2, 156),
(2, 157),
(3, 158),
(3, 159),
(3, 160),
(3, 161),
(3, 162),
(3, 163),
(3, 164),
(3, 165),
(3, 166),
(3, 167),
(3, 168),
(3, 169),
(3, 170),
(3, 171),
(3, 172),
(3, 173),
(3, 174),
(3, 175),
(3, 176),
(3, 177),
(3, 178),
(3, 179),
(4, 180),
(4, 181),
(4, 182),
(4, 183),
(4, 184),
(4, 185),
(4, 186),
(5, 187),
(5, 188),
(5, 189),
(5, 190),
(5, 191),
(6, 192),
(6, 193),
(6, 194),
(6, 195),
(6, 196),
(6, 197),
(7, 198),
(7, 199),
(7, 200),
(7, 201),
(7, 202),
(7, 203),
(7, 204);

-- Elektronika
INSERT INTO `subjectOnDepartment` (`departmentId`, `subjectId`) VALUES
(5, 205),
(5, 206),
(5, 207),
(5, 208),
(5, 209),
(5, 210),
(5, 211),
(5, 212),
(5, 213),
(5, 214),
(5, 215),
(5, 216),
(5, 217),
(5, 218),
(5, 219),
(5, 220),
(5, 221),
(5, 222),
(5, 223),
(5, 224),
(5, 225),
(5, 226),
(5, 227),
(5, 228),
(5, 229),
(5, 230),
(5, 231),
(5, 232),
(5, 233),
(5, 234),
(5, 235),
(5, 236),
(5, 237),
(5, 238),
(5, 239),
(5, 240),
(5, 241),
(5, 242),
(5, 243),
(5, 244),
(5, 245),
(5, 246),
(5, 247),
(5, 248),
(5, 249),
(5, 250),
(5, 251),
(5, 252),
(5, 253),
(5, 254),
(5, 255),
(5, 256),
(5, 257),
(5, 258),
(5, 259),
(5, 260),
(5, 261),
(5, 262),
(5, 263),
(5, 264),
(5, 265),
(5, 266),
(5, 267),
(5, 268),
(5, 269),
(5, 270),
(5, 271),
(5, 272);


INSERT INTO `subjectOnYearOfStudy` (`yearOfStudyId`, `subjectId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 22),
(2, 23),
(2, 24),
(2, 25),
(2, 26),
(2, 27),
(2, 28),
(2, 29),
(2, 30),
(2, 31),
(2, 32),
(2, 33),
(2, 34),
(2, 35),
(2, 36),
(2, 37),
(2, 38),
(2, 39),
(2, 40),
(2, 41),
(2, 42),
(2, 43),
(2, 44),
(2, 45),
(2, 46),
(2, 47),
(2, 48),
(2, 49),
(2, 50),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(2, 56),
(2, 57),
(2, 58),
(2, 59),
(2, 60),
(2, 61),
(2, 62),
(2, 63),
(2, 64),
(2, 65),
(2, 66),
(2, 67),
(2, 68),
(2, 69),
(2, 70),
(2, 71),
(2, 72),
(2, 73),
(2, 74),
(2, 75),
(3, 76),
(3, 77),
(3, 78),
(3, 79),
(3, 80),
(3, 81),
(3, 82),
(3, 83),
(3, 84),
(3, 85),
(3, 86),
(3, 87),
(3, 88),
(3, 89),
(3, 90),
(3, 91),
(3, 92),
(3, 93),
(3, 94),
(3, 95),
(3, 96),
(3, 97),
(3, 98),
(3, 99),
(3, 100),
(3, 101),
(3, 102),
(3, 103),
(3, 104),
(3, 105),
(3, 106),
(3, 107),
(3, 108),
(3, 109),
(3, 110),
(3, 111),
(3, 112),
(3, 113),
(3, 114),
(3, 115),
(3, 116),
(3, 117),
(3, 118),
(3, 119),
(3, 120),
(3, 121),
(3, 122),
(3, 123),
(3, 124),
(3, 125),
(3, 126),
(3, 127),
(3, 128),
(3, 129),
(3, 130),
(3, 131),
(3, 132),
(3, 133),
(3, 134),
(3, 135),
(3, 136),
(3, 137),
(3, 138),
(3, 139),
(3, 140),
(3, 141),
(4, 142),
(4, 143),
(4, 144),
(4, 145),
(4, 146),
(4, 147),
(4, 148),
(4, 149),
(4, 150),
(4, 151),
(4, 152),
(4, 153),
(4, 154),
(4, 155),
(4, 156),
(4, 157),
(4, 158),
(4, 159),
(4, 160),
(4, 161),
(4, 162),
(4, 163),
(4, 164),
(4, 165),
(4, 166),
(4, 167),
(4, 168),
(4, 169),
(4, 170),
(4, 171),
(4, 172),
(4, 173),
(4, 174),
(4, 175),
(4, 176),
(4, 177),
(4, 178),
(4, 179),
(4, 180),
(4, 181),
(4, 182),
(4, 183),
(4, 184),
(4, 185),
(4, 186),
(4, 187),
(4, 188),
(4, 189),
(4, 190),
(4, 191),
(4, 192),
(4, 193),
(4, 194),
(4, 195),
(4, 196),
(4, 197),
(4, 198),
(4, 199),
(4, 200),
(4, 201),
(4, 202),
(4, 203),
(4, 204);

-- Elektronika
INSERT INTO `subjectOnYearOfStudy` (`yearOfStudyId`, `subjectId`) VALUES
(2, 205),
(2, 206),
(2, 207),
(2, 208),
(2, 209),
(2, 210),
(2, 211),
(3, 212),
(3, 213),
(3, 214),
(3, 215),
(3, 216),
(3, 217),
(3, 218),
(3, 219),
(3, 220),
(3, 221),
(3, 222),
(3, 223),
(3, 224),
(3, 225),
(3, 226),
(3, 227),
(3, 228),
(3, 229),
(3, 230),
(3, 231),
(3, 232),
(3, 233),
(3, 234),
(4, 235),
(4, 236),
(4, 237),
(4, 238),
(4, 239),
(4, 240),
(4, 241),
(4, 242),
(4, 243),
(4, 244),
(4, 245),
(4, 246),
(4, 247),
(4, 248),
(4, 249),
(4, 250),
(4, 251),
(4, 252),
(4, 253),
(4, 254),
(4, 255),
(4, 256),
(4, 257),
(4, 258),
(4, 259),
(4, 260),
(4, 261),
(4, 262),
(4, 263),
(4, 264),
(4, 265),
(4, 266),
(4, 267),
(4, 268),
(4, 269),
(4, 270),
(4, 271),
(4, 272);
   

INSERT INTO `post` (`title`,`text`,`date`, `userId`, `subjectId`, `typeId`, `yearOfExamId`, `examinationPeriodId`) VALUES
( '', '', '2022-12-03 23:59:59', 1, 15, 1, 3, 1),
( '', '', '2022-12-03 23:59:59', 1, 15, 2, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 1, 3, null),
( '', '', '2022-12-03 23:59:59', 2, 15, 2, 3, null),
( '', '', '2022-12-03 23:59:59', 3, 15, 1, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 2, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 1, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 2, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 1, 3, null),
( '', '', '2022-12-03 23:59:59', 1, 15, 2, 3, null),
( '', '', '2022-12-03 23:59:59', 1, null, null, null, null);

UPDATE `post` SET title = 'Paralelni sistemi' WHERE id = 1;
UPDATE `post` SET title = 'Naslov2' WHERE id = 2;
UPDATE `post` SET title = 'Naslov3' WHERE id = 3;
UPDATE `post` SET title = 'Naslov4' WHERE id = 4;
UPDATE `post` SET title = 'Naslov5' WHERE id = 5;
UPDATE `post` SET title = 'Naslov6' WHERE id = 6;
UPDATE `post` SET title = 'Naslov7' WHERE id = 7;
UPDATE `post` SET title = 'Naslov8' WHERE id = 8;
UPDATE `post` SET title = 'Naslov9' WHERE id = 9;
UPDATE `post` SET title = 'Naslov10' WHERE id = 10;

UPDATE `post` SET text = 'Danasnji blanket' WHERE id = 1;
UPDATE `post` SET text = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' WHERE id = 2;
UPDATE `post` SET text = 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' WHERE id = 3;
UPDATE `post` SET text = 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut' WHERE id = 4;
UPDATE `post` SET text = 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit' WHERE id = 5;
UPDATE `post` SET text = 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque' WHERE id = 6;
UPDATE `post` SET text = 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae' WHERE id = 7;
UPDATE `post` SET text = 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas' WHERE id = 8;
UPDATE `post` SET text = 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae' WHERE id = 9;
UPDATE `post` SET text = 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas' WHERE id = 10;



INSERT INTO `postLikedBy` (`postId`, `userId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 2),
(4, 1);


INSERT INTO `postDislikedBy` (`postId`, `userId`) VALUES
(2, 3),
(3, 3),
(4, 3);


INSERT INTO `comment` (`text`, `date`, `userId`, `postId`) VALUES
( 'Ovo je prvi komentar ', '2022-12-03 23:59:59', 1, 1),
( 'Ovo je drugi komentar ', '2022-12-04 23:59:59', 2, 1),
( 'Ovo je treci komentar ', '2022-12-05 23:59:59', 3, 1),
( 'Ovo je cetvrti komentar ', '2022-12-06 23:59:59', 1, 1);


INSERT INTO `commentLikedBy` (`commentId`, `userId`) VALUES
(1, 1),
(1, 3),
(2, 1),
(3, 1),
(3, 2),
(4, 1);


INSERT INTO `commentDislikedBy` (`commentId`, `userId`) VALUES
(1, 2);




INSERT INTO `tutor` (`id`, `price`, `groupPrice`, `isEnabled`, `message`, `phone`, `likes`, `dislikes`, `name`, `link`) VALUES 
(1,1500,700,1,'SVE ZNAM dodji na cas','123',0,0, "A",""),
(2,1200,800,1,'Nastava za predmete','456',0,0,"B","");

INSERT INTO `tutor_subject` (`id`, `isEnabled`, `tutorId`, `subjectId`) VALUES 
(1,1,1,26),
(2,1,2,13),
(3,1,2,12),
(4,1,2,14),
(5,1,2,15),
(6,1,1,16),
(7,0,1,27),
(8,1,1,13);
