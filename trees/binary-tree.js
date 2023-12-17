class Node {
    constructor(data) {
        this.data = data;
    }

    data = null;
    left = null;
    right = null;
}

const root = new Node(2);
const node1 = new Node(3);
const node2 = new Node(4);
const node3 = new Node(5);
const node4 = new Node(6);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;

function getSum(node) {
    let sum = node.data;
    if (node.left) {
        sum += getSum(node.left);
    }
    if (node.right) {
        sum += getSum(node.right);
    }
    return sum;
}

console.log(getSum(root));