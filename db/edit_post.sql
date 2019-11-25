UPDATE life_goals 
    SET list_content = $1
    WHERE id = $2;