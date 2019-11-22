SELECT * FROM dreamers d
JOIN dreamers_hash dh ON d.dreamer_id = dh.dreamer_id
WHERE email = $1;