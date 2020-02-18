INSERT INTO "globalMeasures"("measureDate", "measureTime", "nhThree", "hTwoS", "coTwo", "temperature", "wetness") VALUES 
('2020-01-27', '12:00:00', '3', '1', '500', '21.5', '53'),
('2020-01-28', '12:00:00', '11', '0', '1500', '21.1', '68'),
('2020-01-29', '12:00:00', '9', '2', '2000', '21.8', '69');

INSERT INTO "pens"("size") VALUES ('6.57'), ('5.96'), ('5.96'), ('7.83'), ('7.12'), ('5.98');

INSERT INTO "penMeasures"("idPen", "measureDate", "measureTime", "breakdown", "dosatron", "addition", "forage", "forageQtyUsed") VALUES 
('1', '2020-01-27', '12:00:00', null, null, null, '100', null),
('2', '2020-01-28', '13:15:00', null, null, null, '100', '75'),
('1', '2020-01-27', '12:05:00', null, null, null, '100', null),
('2', '2020-01-28', '12:15:00', null, null, null, '100', '90');

INSERT INTO "forages"("idPen", "fgAbout", "fgQty", "fgPrice", "creationDate", "producer", "expiration") VALUES
('1', null, '100', '123', '2010-06-12', 'JakasFirma', '2016-06-12'),
('2', null, '125', '153', '2010-06-12', 'JakasFirma', '2016-06-12'),
('3', null, '111', '140', '2010-06-12', 'JakasFirma', '2016-06-12'),
('4', null, '123', '150', '2010-06-12', 'JakasFirma', '2016-06-12'),
('5', null, '121', '145', '2010-06-12', 'JakasFirma', '2016-06-12'),
('6', null, '132', '171', '2010-06-12', 'JakasFirma', '2016-06-12');

--- not sure if there is one forage for every pen or one forage for all of them

INSERT INTO "pigs"("idPen", "id", "pigGender", "pigShoppingDate", "pigShoppingPrice", "pigSaleDate", "pigSellingCost", "pigDeathDate") VALUES
('1', '12sdfas1', 'm', '2019-12-12', '231', null, null, null),
('1', '34awtqw4', 'm', '2019-12-12', '231', null, null, null),
('1', '98saewa5', 's', '2019-12-12', '231', null, null, null),
('1', 'fs231sad', 'm', '2019-12-12', '231', null, null, null),
('1', '23sasdsa', 'm', '2019-12-12', '231', null, null, null),
('1', '21kfasds', 's', '2019-12-12', '231', null, null, null),
('1', '1dsamcjs', 'm', '2019-12-12', '231', null, null, null),
('1', '09sdacjf', 'm', '2019-12-12', '231', null, null, null),
('1', '7mdjscme', 's', '2019-12-12', '231', null, null, null),
('2', 'sdacass1', 'm', '2019-12-12', '231', null, null, null),
('2', '32sdacsa', 'm', '2019-12-12', '231', null, null, null),
('2', '2dscnssd', 's', '2019-12-12', '231', null, null, null),
('2', '12dgfasd', 'm', '2019-12-12', '231', null, null, null),
('2', '54dsaqes', 'm', '2019-12-12', '231', null, null, null),
('2', '9dsacasd', 's', '2019-12-12', '231', null, null, null),
('2', '2dsasdsc', 'm', '2019-12-12', '231', null, null, null),
('2', 'ksdal231', 'm', '2019-12-12', '231', null, null, null),
('2', 'dsajsda9', 's', '2019-12-12', '231', null, null, null),
('3', 'dsacasds', 'm', '2019-12-12', '231', null, null, null),
('3', 'mklksdaj', 'm', '2019-12-12', '231', null, null, null),
('3', 'samsaclk', 's', '2019-12-12', '231', null, null, null),
('3', 'jpoasdks', 'm', '2019-12-12', '231', null, null, null),
('3', 'klnasdsd', 'm', '2019-12-12', '231', null, null, null),
('3', 'dsjpasps', 's', '2019-12-12', '231', null, null, null),
('3', 'dsanlksa', 'm', '2019-12-12', '231', null, null, null),
('3', 'knladskl', 'm', '2019-12-12', '231', null, null, null),
('3', 'jlsaknds', 's', '2019-12-12', '231', null, null, null),
('4', 'sd21dsas', 'm', '2019-12-12', '231', null, null, null),
('4', '421llmad', 'm', '2019-12-12', '231', null, null, null),
('4', '9sdaklas', 's', '2019-12-12', '231', null, null, null),
('4', 'olwqeknx', 'm', '2019-12-12', '231', null, null, null),
('4', 'olsaxsad', 'm', '2019-12-12', '231', null, null, null),
('4', 'ppdsadsa', 's', '2019-12-12', '231', null, null, null),
('4', 'ijasdisd', 'm', '2019-12-12', '231', null, null, null),
('4', 'ihodsaoi', 'm', '2019-12-12', '231', null, null, null),
('4', 'jlndaslk', 's', '2019-12-12', '231', null, null, null),
('5', 'kldaslsd', 'm', '2019-12-12', '231', null, null, null),
('5', 'dsaklkds', 'm', '2019-12-12', '231', null, null, null),
('5', '8dsahusd', 's', '2019-12-12', '231', null, null, null),
('5', '8sdahio9', 'm', '2019-12-12', '231', null, null, null),
('5', 'dsa80isa', 'm', '2019-12-12', '231', null, null, null),
('5', '8hsadiod', 's', '2019-12-12', '231', null, null, null),
('5', '7dsajkjb', 'm', '2019-12-12', '231', null, null, null),
('5', '80dsajud', 'm', '2019-12-12', '231', null, null, null),
('5', '7y9asddd', 's', '2019-12-12', '231', null, null, null),
('5', '7asdjnds', 'm', '2019-12-12', '231', null, null, null),
('5', 'y7adsdsa', 'm', '2019-12-12', '231', null, null, null),
('5', '90udsaih', 's', '2019-12-12', '231', null, null, null),
('5', 'dsajldas', 'm', '2019-12-12', '231', null, null, null),
('5', 'ihdsanjc', 'm', '2019-12-12', '231', null, null, null),
('5', '8hbsadds', 's', '2019-12-12', '231', null, null, null),
('5', 'csakldsa', 'm', '2019-12-12', '231', null, null, null),
('5', 'k80dsahh', 'm', '2019-12-12', '231', null, null, null),
('5', '90dsancd', 's', '2019-12-12', '231', null, null, null),
('6', 'dsajncsa', 'm', '2019-12-12', '231', null, null, null),
('6', 'knsdakls', 'm', '2019-12-12', '231', null, null, null),
('6', '9mkaskld', 's', '2019-12-12', '231', null, null, null),
('6', 'ipwqknsa', 'm', '2019-12-12', '231', null, null, null),
('6', 'ascsa8ds', 'm', '2019-12-12', '231', null, null, null),
('6', 'aadsadsa', 's', '2019-12-12', '231', null, null, null),
('6', '1mmasnds', 'm', '2019-12-12', '231', null, null, null),
('6', 'odkpdads', 'm', '2019-12-12', '231', null, null, null),
('6', 'dkmpsdad', 's', '2019-12-12', '231', null, null, null);

INSERT INTO exams(idPig, exDate, exTime, feces, tissue, exResult, medicine, medicineQty, medicineType, diarrhea, pigWeight, temperature, lameness, respiratorySys, skinChanges) VALUES
('dsajncsa', '2020-01-01', '12:00:00', '0', '0', 'W normie', null, null, null, '1', '123', '38.1', '1', '1', 'Brak zmian');

INSERT INTO "waters"("idPen", "measureDate", "measureTime", "waterInit", "waterUsed") VALUES 
('1', '2020-01-27', '12:00:00', '24482', '14'),
('1', '2020-01-28', '13:00:00', '24482', '24'),
('2', '2020-01-27', '12:00:00', '24322', '23'),
('2', '2020-01-28', '13:00:00', '24322', '43'),
('3', '2020-01-27', '12:00:00', '24412', '12'),
('3', '2020-01-28', '13:00:00', '24412', '53'),
('4', '2020-01-27', '12:00:00', '24182', '23'),
('4', '2020-01-28', '13:00:00', '24182', '43'),
('5', '2020-01-27', '12:00:00', '24582', '53'),
('5', '2020-01-28', '13:00:00', '24582', '66'),
('6', '2020-01-27', '12:00:00', '24411', '32'),
('6', '2020-01-28', '13:00:00', '24411', '59');