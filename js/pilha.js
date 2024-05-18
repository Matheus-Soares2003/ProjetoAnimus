class Pilha {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.pilha = new Array(tamanho);
        this.topo = -1;
    }

    estaCheia() {
        return this.topo === this.tamanho - 1;
    }

    estaVazia() {
        return this.topo === -1;
    }

    empilhar(elemento) {
        if (this.estaCheia()) {
            alert('PILHA CHEIA');
            return;
        }
        this.topo++;
        this.pilha[this.topo] = elemento;
        this.atualizarVisualizacao();
    }

    desempilhar() {
        if (this.estaVazia()) {
            alert('PILHA VAZIA!');
            return;
        }
        const elemento = this.pilha[this.topo];
        this.pilha[this.topo] = undefined;
        this.topo--;
        this.atualizarVisualizacao();
        return elemento;
    }

    atualizarVisualizacao() {
        const quadrados = document.querySelectorAll('.quadr-pilha');
        quadrados.forEach((quadrado, index) => {
            const pilhaIndex = this.tamanho - 1 - index; // Começa do fundo
            if (pilhaIndex <= this.topo) {
                quadrado.textContent = this.pilha[pilhaIndex];
            } else {
                quadrado.textContent = '';
            }
        });
    }
}

const pilha = new Pilha(5);

function empilhar() {
    const input = document.getElementById('inptNumPilhas');
    const numero = parseInt(input.value);
    if (!isNaN(numero)) {
        pilha.empilhar(numero);
        input.value = '';
    }
}

function desempilhar() {
    pilha.desempilhar();
}