USE hr_app_db;

SELECT inventory_type, COUNT(*) as count FROM inventory GROUP BY inventory_type;