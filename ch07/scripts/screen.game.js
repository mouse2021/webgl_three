jewel.screens["game-screen"] = (function() {
    var board = jewel.board,
        display = jewel.display;

    function run() {
        board.initialize(function() {
            display.initialize(function() {
                display.redraw(board.getBoard(), function() {
                    // do nothing for now
                });
            });
        });
    }

    return {
        run : run
    };
})();
