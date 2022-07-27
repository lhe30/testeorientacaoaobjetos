class Cliente {
    nome;
    cpf;
    
}

class contaCorrente {
    agencia;
    #saldo;

    sacar(valor){
        if(this.#saldo >= valor) {
            this.#saldo -= valor;
        }
        
    }

    depositar(valor){
        if(valor >0) {
            this.#saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Luiz";
cliente1.cpf = 40209271892;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 123456789101;

const contaCorrenteLuiz = new contaCorrente
contaCorrenteLuiz.agencia = 1001;

contaCorrenteLuiz.depositar(100);
contaCorrenteLuiz.sacar(50);

console.log(contaCorrenteLuiz);
