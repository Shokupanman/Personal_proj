UPDATE life_goals 
    SET list_content = $1
    WHERE list_id = $2;

    SELECT * FROM life_goals
    WHERE dreamer_id = $3;
