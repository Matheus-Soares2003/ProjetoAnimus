class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.display();
    }

    remove() {
        if (!this.head) {
            alert("A lista está vazia");
            return;
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
        this.display();
    }

    display() {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';
        let current = this.head;
        while (current) {
            const nodeElement = document.createElement('div');
            nodeElement.className = 'node';
            const valueElement = document.createElement('div');
            valueElement.className = 'node-value';
            valueElement.innerText = current.value;
            nodeElement.appendChild(valueElement);
            listContainer.appendChild(nodeElement);

            if (current.next) {
                const arrowElement = document.createElement('div');
                arrowElement.className = 'arrow';
                arrowElement.innerHTML = '&#8594;';
                listContainer.appendChild(arrowElement);
            }
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

function addNode() {
    const nodeValue = document.getElementById('nodeValue').value;
    if (nodeValue) {
        linkedList.add(nodeValue);
        document.getElementById('nodeValue').value = '';
    } else {
        alert('Por favor, insira um valor para o nó.');
    }
}

function removeNode() {
    linkedList.remove();
}
