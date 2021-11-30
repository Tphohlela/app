module.exports = function GameApp(pool) {

    async function startGame(userName) {
        // get the name of the user
        const result = await pool.query('insert into players (name) values ($1)', [userName]);
        if (result.rowCount === 1) {
            return result.rows[0].id;
        }
        return null;

        // after adding user...in the next page the app must return word and attept_id
    }

    async function checkAnswer(userName) {
        // get the name of the user
        const result = await pool.query('insert into players (name) values ($1)', [userName]);
        if (result.rowCount === 1) {

            // checking the attempt of player and how attempt left for the player
            var id = result.rows[0].id;
            const attempt = await pool.query('select player_id from attempt WHERE player_id=$1', [id]);
            // Use attempt var to check status and counter of the users is left in order to the end the game
            if (attempt.rowCount === 0) {
                // does not exist or no attempt

                const newPlayer = await pool.query('insert into attempt (player_id, counter, status) values ($1, $2, $3)', [id, 1, 'busy']);
            }

            else if (attempt.rowCount > 1) {
                
                const existingPlayer = await pool.query('update attempt set (counter + 1, status = $1)', ['Complete']);

            } 
            return null;

        }
        return null;

        // after adding user...in the next page the app must return word and attempt_id
    }


    async function userDetails() {
        const result = await pool.query('select (name, score) from players');
        return result.rows;
    }


    return {
        startGame,
        checkAnswer,
        userDetails
    }


}