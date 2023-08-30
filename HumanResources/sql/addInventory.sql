USE hr_app_db;

INSERT INTO inventory (brand, entering_date, inventory_status, inventory_type, model, serial_no)
SELECT
	CASE FLOOR(RAND() * 3)
		WHEN 0 THEN 'x'
        WHEN 1 THEN 'y'
        WHEN 2 THEN 'z'
	END AS brand,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN '2021-05-20'
        WHEN 1 THEN '2023-08-15'
        WHEN 2 THEN '2020-06-12'
	END AS entering_date,
    CASE FLOOR(RAND() * 2)
		WHEN 0 THEN 'IN_STORAGE'
        WHEN 1 THEN 'IN_THE_OFFICE'
	END AS inventory_status,
    CASE FLOOR(RAND() * 4)
		WHEN 0 THEN 'MOUSE'
        WHEN 1 THEN 'CAR'
        WHEN 2 THEN 'DISK'
        WHEN 3 THEN 'COMPUTER'
	END AS inventory_type,
    CASE FLOOR(RAND() * 4)
		WHEN 0 THEN 'a'
        WHEN 1 THEN 'b'
        WHEN 2 THEN 'c'
        WHEN 3 THEN 'd'
	END AS model,
    CASE FLOOR(RAND() * 3)
		WHEN 0 THEN '151616516'
        WHEN 1 THEN '265695995'
        WHEN 2 THEN '356594466'
	END AS serial_no
	
    
    
    
    
    
    
    
    