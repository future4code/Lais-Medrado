```

USE `joy-419749-lais-silva`;

DESCRIBE Actor;
SELECT * FROM Actor;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
SET SQL_SAFE_UPDATES = 0;

#exercicio01 
# a) deleta a coluna salary 
# b)redeclara a coluna gender para sex, com até 6 letras
# c) redeclara gender pra gender , com até 255 letras

#d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#2)
#a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "002";

#A) 
UPDATE Actor SET name = "Moacyr Franco",   birth_date =  "1994-10-19" WHERE id = "003" ;

#B) PARA ALTERAR UM CAMPO É O UPDATE, PARA ALTERAR A TABELA É ALTER

UPDATE Actor SET name=UPPER(name) WHERE id = "001";
#C)
UPDATE Actor SET name= "Will smith ", salary = 70000, birth_date = "1875-10-30", gender = "female" WHERE id = "050";
 #D) Testei  e obviamente  deu erro pq o id , não foi encontrado;
 
 
 #3) 
 #A)
 DELETE FROM Actor WHERE name = "Moacyr Franco";
 #B) 
 DELETE FROM Actor WHERE gender = "male" AND salary < 1000000;

#4) 
#A)
SELECT MAX(salary) FROM Actor;
#B)
SELECT MIN(salary) FROM Actor;
#C)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

#D)
SELECT SUM(salary) FROM Actor;

#5)
#A)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
#Retorna a quantidade de atore spor gênero 


#B)
SELECT id, name FROM Actor ORDER BY name DESC;

#C)
SELECT * FROM Actor ORDER BY salary  ASC;

#D)
SELECT * FROM Actor ORDER BY salary  ASC LIMIT 3;

#E)

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

#6)
DESCRIBE movie;
SELECT  * FROM movie;
#A)
#a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data 
#limite em que o filme será passado no cinema. 
ALTER TABLE movie ADD playing_limit DATE;

#B) 
ALTER TABLE movie CHANGE rating rating FLOAT;

#C)

UPDATE movie SET playing_limit = "1999-10-03" WHERE id = "003";
UPDATE movie SET playing_limit = "2050-10-03" WHERE id = "002";

#D)
DELETE FROM movie WHERE id ="001";
UPDATE movie SET sinopse = "teste" WHERE id = "001"
#0 rows afetados 



```