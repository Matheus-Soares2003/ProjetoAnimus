class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    visualizeTree(node = this.root, parentElement = document.getElementById('binaryTree')) {
        if (!node) return;

        const nodeElement = document.createElement('div');
        nodeElement.className = 'node';
        nodeElement.innerText = node.value;

        parentElement.appendChild(nodeElement);

        const childrenContainer = document.createElement('div');
        childrenContainer.style.display = 'flex';
        childrenContainer.style.justifyContent = 'center';

        if (node.left) {
            const leftContainer = document.createElement('div');
            leftContainer.className = 'left';
            this.visualizeTree(node.left, leftContainer);
            childrenContainer.appendChild(leftContainer);
        }

        if (node.right) {
            const rightContainer = document.createElement('div');
            rightContainer.className = 'right';
            this.visualizeTree(node.right, rightContainer);
            childrenContainer.appendChild(rightContainer);
        }

        parentElement.appendChild(childrenContainer);
    }

    clearVisualization() {
        const treeContainer = document.getElementById('binaryTree');
        while (treeContainer.firstChild) {
            treeContainer.removeChild(treeContainer.firstChild);
        }
    }

    clearTree() {
        this.root = null;
        this.clearVisualization();
    }
}

const tree = new BinaryTree();

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        tree.insert(number);
        tree.clearVisualization();
        tree.visualizeTree();
        numberInput.value = '';
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    tree.clearTree();
});
