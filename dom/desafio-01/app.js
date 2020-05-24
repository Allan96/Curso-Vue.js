new Vue({
    el: '#desafio',
    data: {
        nome: 'Allan Souza',
        idade: '23',
        imagem: 'https://avatars1.githubusercontent.com/u/31579883?s=460&u=b562dee67402f964fb7944511a2c8f3690546c3e&v=4'
    },
    methods: {
        idadeTres: function() {
            const idadeTres = this.idade * 3;
            return idadeTres
        },
        numberRandom: function() {
            const number = Math.random();
            return number;
        }
    }
})