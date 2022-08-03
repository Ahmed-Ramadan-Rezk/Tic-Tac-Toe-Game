let activePlayer = "X";
let gamePlaying = true;
let sqs = document.querySelectorAll('.square');
let follower = document.querySelector(".follower");

sqs.forEach(sq => {
    sq.addEventListener('click', () => {
        // Check if the game is playing
        if(gamePlaying == true) {
            (function initializeGame() {
                // Check if all squares content are empty
                if(sq.textContent == "") {
                    sq.textContent = activePlayer;
                    activePlayer = (activePlayer === "X") ? "O" : "X";
                    follower.innerHTML = `${activePlayer}'s turn`;
                } else {
                    return false;
                }

                // Check who wins or it's a Draw
                (function gameOverCheck() {
                    if(sqs[0].textContent == sqs[1].textContent && sqs[1].textContent == sqs[2].textContent && sqs[0].textContent != "") {
                        gameOver();
                    } else if(sqs[0].textContent == sqs[3].textContent && sqs[3].textContent == sqs[6].textContent && sqs[0].textContent != "") {
                        gameOver();
                    } else if(sqs[0].textContent == sqs[4].textContent && sqs[4].textContent == sqs[8].textContent && sqs[0].textContent != "") {
                        gameOver();
                    } else if(sqs[1].textContent == sqs[4].textContent && sqs[4].textContent == sqs[7].textContent && sqs[1].textContent != "") {
                        gameOver();
                    } else if(sqs[2].textContent == sqs[5].textContent && sqs[5].textContent == sqs[8].textContent && sqs[2].textContent != "") {
                        gameOver();
                    } else if(sqs[2].textContent == sqs[4].textContent && sqs[4].textContent == sqs[6].textContent && sqs[2].textContent != "") {
                        gameOver();
                    } else if(sqs[3].textContent == sqs[4].textContent && sqs[4].textContent == sqs[5].textContent && sqs[3].textContent != "") {
                        gameOver();
                    } else if(sqs[6].textContent == sqs[7].textContent &&  sqs[7].textContent == sqs[8].textContent && sqs[6].textContent != "") {
                        gameOver();
                    } else if(isDraw()) {
                        follower.innerHTML = "Draw🤝";
                        gamePlaying = false;
                    }

                    function gameOver() {
                        gamePlaying = false;
                        follower.innerHTML = "Winner👏";
                    }
                    
                    function isDraw() {
                        return [...sqs].every(sq => {
                            return sq.textContent === "X" || sq.textContent === "O"
                        })
                    }

                }());
            }());         
        };
    });
});

// Replay
document.querySelector(".replay").onclick = () => {window.location.reload()};