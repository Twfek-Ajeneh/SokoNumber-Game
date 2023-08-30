import Cell from "./Cell.js";

// All level are represented as array of Cells with size of 7*7
export const levels = [
    [
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 0 , 1), new Cell(2 , 0 , 0), new Cell(2 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 1 , 0), new Cell(3 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ],
    [
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(0 , 0 , 1), new Cell(3 , 0 , 0), new Cell(0 , 0 , 2), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(0 , 1 , 0), new Cell(3 , 0 , 0), new Cell(0 , 2 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ],
    [
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(0 , 0 , 1), new Cell(0 , 2 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 1 , 0), new Cell(0 , 0 , 2), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ],
    [
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 0 , 1), new Cell(3 , 0 , 0), new Cell(0 , 0 , 2), new Cell(3 , 0 , 0), new Cell(0 , 0 , 3), new Cell(3 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 3 , 0), new Cell(2 , 0 , 0), new Cell(0 , 2 , 0), new Cell(2 , 0 , 0), new Cell(0 , 1 , 0), new Cell(3 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ],
    [
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 0 , 1), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 1 , 0), new Cell(0 , 0 , 2), new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 2 , 0), new Cell(0 , 0 , 3), new Cell(0 , 4 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 3 , 0), new Cell(0 , 0 , 4), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ],
    [
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 2 , 2), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(2 , 0 , 0), new Cell(0 , 0 , 1), new Cell(0 , 1 , 0), new Cell(0 , 5 , 5), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(0 , 0 , 3), new Cell(3 , 0 , 0), new Cell(0 , 3 , 4), new Cell(0 , 4 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(3 , 0 , 0), new Cell(1 , 0 , 0)],
        [new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0), new Cell(1 , 0 , 0)]
    ]
];