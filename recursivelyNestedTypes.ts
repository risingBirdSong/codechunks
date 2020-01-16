interface Container<T> {
    [index:number]: Container<T> | T
}

let simpleArr:Container<number> = [1,2,3];
let nestedOnce: Container<number> = [[1,2,3],[4,5,6]];
let nestedTwice: Container<number> = [[[1,2],[3,4]],[[5,6],[7,8]]]

function takeAnyNestedArray(arr:Container<number>) {
    return arr
}

takeAnyNestedArray(simpleArr)
takeAnyNestedArray(nestedOnce)
takeAnyNestedArray(nestedTwice)


// and another solution


interface anyAmountOfNesting<T> extends Array<anyAmountOfNesting<T> | T> { }


// another solution

export interface Leaf {
    iAmALeaf: true;
}

export type Node = NodeArray | Leaf;

export interface NodeArray extends Array<Node> {}

let arr: Node = [
    [
        [
            {iAmALeaf: true},
        ],
        {iAmALeaf: true},
    ],
    {iAmALeaf: true},
];
