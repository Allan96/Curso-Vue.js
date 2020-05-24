new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Exibir Alerta');
        },
        keyDown() {
            this.valor = event.target.value;
        }
    }
})