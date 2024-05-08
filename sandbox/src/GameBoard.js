// GameBoard.js

class GameBoard {
    constructor(containerId) {
        this.containerId = containerId;
        this.masus = [];
        this.initializeBoard();
    }

    initializeBoard() {
        // コンテナ要素を取得
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error("Container element not found.");
            return;
        }

        // テーブル要素を作成してコンテナに追加
        const table = document.createElement("table");
        table.setAttribute("id", "board");
        container.appendChild(table);

        // マス目を作成してテーブルに追加
        for (let r = 0; r < 8; r++) {
            const row = document.createElement("tr");
            this.masus[r] = [];
            for (let c = 0; c < 8; c++) {
                const masu = new Masu(this, r, c);
                const cell = document.createElement("td");
                cell.appendChild(masu.td);
                row.appendChild(cell);
                this.masus[r].push(masu);
            }
            table.appendChild(row);
        }

        // 初期配置
        this.set(3, 3, ISHI_BLACK)
            .set(4, 4, ISHI_BLACK)
            .set(3, 4, ISHI_WHITE)
            .set(4, 3, ISHI_WHITE);
    }
}
