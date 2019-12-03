INSERT INTO life_goals ( list_content, dreamer_id, school_id )
VALUES ($1, $2, $3 )
RETURNING *;