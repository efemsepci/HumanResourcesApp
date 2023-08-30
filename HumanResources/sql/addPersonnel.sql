USE hr_app_db;

INSERT INTO personnel (birth_date,department,name,gender,graduation_status,is_working,job,surname,marital_status,tckn)
SELECT
	CASE FLOOR(RAND() * 3)
		WHEN 0 THEN '2000-11-08'
        WHEN 1 THEN '1978-07-15'
        WHEN 2 THEN '1988-12-03'
	END AS birth_date,
    CASE FLOOR(RAND() * 2)
		WHEN 0 THEN 'SOFTWARE_DEVELOPMENT'
        WHEN 1 THEN 'RESEARCH_DEVELOPMENT'
	END AS department,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN 'john'
        WHEN 1 THEN 'mary'
        WHEN 2 THEN 'susan'
	END AS name,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN 'M'
        WHEN 1 THEN 'F'
        WHEN 2 THEN 'O'
	END AS gender,
    CASE FLOOR(RAND() * 4)
		WHEN 0 THEN 'UNDER_GRADUATE'
        WHEN 1 THEN 'ASSOCIATE_DEGREE'
        WHEN 2 THEN 'POST_GRADUATE'
        WHEN 3 THEN 'DOCTORATE'
	END AS graduation_status,
    CASE FLOOR(RAND() * 2)
		WHEN 0 THEN 'Yes'
        WHEN 1 THEN 'No'
	END AS is_working,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN 'SOFTWARE_DEVELOPER'
        WHEN 1 THEN 'ASSISTANT_DIRECTOR'
        WHEN 2 THEN 'DIRECTOR'
	END AS job,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN 'smith'
        WHEN 1 THEN 'jones'
        WHEN 2 THEN 'williams'
	END AS surname,
    CASE FLOOR(RAND() * 2)
		WHEN 0 THEN 'bekar'
        WHEN 1 THEN 'evli'
	END AS marital_status,
    CASE FLOOR(RAND() * 2)
		WHEN 0 THEN '60517168150'
        WHEN 1 THEN '56491170654'
	END AS tckn
	
    
    
    
    
    
    
    
    