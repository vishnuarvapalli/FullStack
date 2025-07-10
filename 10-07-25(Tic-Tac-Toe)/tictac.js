   const squares = document.querySelectorAll('.square');
        let currentPlayer = 'X';

        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.textContent === '') {
                    square.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            });
        });
        
        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], 
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6] 
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
                    alert(`${squares[a].textContent} wins!`);
                    resetGame();
                    return;
                }
            }

            if ([...squares].every(square => square.textContent)) {
                alert("It's a draw!");
                resetGame();
            }
        }
        function resetGame() {
            squares.forEach(square => square.textContent = '');
            currentPlayer = 'X';
        }
        squares.forEach(square => {
            square.addEventListener('click', checkWinner);
        });