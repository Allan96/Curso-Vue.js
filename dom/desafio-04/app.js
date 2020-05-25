new Vue({
    el: '#desafio',
    data: {
        efeito: true,
        classe1: '',
        efeito2: 'true',
        classe2: '',
        estilo1: 'red',
        largura: false
    },
    methods: {
        iniciarEfeito() {
            this.efeito = !this.efeito
        },
        iniciarProgresso() {
            this.largura = this.largura == '100%' ? '0' : '100%'
        }
    },
    computed: {
        darEstilo() {
            return this.efeito ? 'destaque' : 'encolher'
        },
        darClasse() {
            return 'c1'
        },
        darClasse2() {
            return this.efeito2 == 'true' ? 'c1' : 'c2'
        }
    }
})