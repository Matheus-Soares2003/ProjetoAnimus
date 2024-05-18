//Código de fila
class Fila {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.fila = new Array(tamanho);
        this.inicio = 0;
        this.fim = 0;
        this.quantidade = 0;
    }

    estaCheia() {
        return this.quantidade === this.tamanho;
    }

    estaVazia() {
        return this.quantidade === 0;
    }

    enfileirar(elemento) {
        if (this.estaCheia()) {
            alert('FILA CHEIA');
            return;
        }
        this.fila[this.fim] = elemento;
        this.fim++;
        this.quantidade++;
        this.atualizarVisualizacao();
    }

    desenfileirar() {
        if (this.estaVazia()) {
            alert('FILA VAZIA!');
            return;
        }
        const elemento = this.fila[this.inicio];
        for (let i = 0; i < this.fim - 1; i++) {
            this.fila[i] = this.fila[i + 1];
        }
        this.fim--;
        this.fila[this.fim] = undefined;
        this.quantidade--;
        this.atualizarVisualizacao();
        return elemento;
    }

    atualizarVisualizacao() {
        const quadrados = document.querySelectorAll('.quadr-fila');
        quadrados.forEach((quadrado, index) => {
            if (index < this.quantidade) {
                quadrado.textContent = this.fila[index];
            } else {
                quadrado.textContent = '';
            }
        });
    }
}

const fila = new Fila(5);

function enqueue() {
    const input = document.getElementById('inptNumFilas');
    const numero = parseInt(input.value);
    if (!isNaN(numero)) {
        fila.enfileirar(numero);
        input.value = '';
    }
}

function dequeue() {
    fila.desenfileirar();
}
