Vue.component('tabela', {
    props: ['labels', 'pessoa'],
    template: '<table>' +
    '<tr>'+
    '<td style="border: solid 1px" v-for="coluna in labels">{{coluna}}</td>'+
    '</tr>' +
        '<tr v-for="p in pessoa">' +
            '<td>{{p.fullname}}</td>'+
            '<td>{{p.email}}</td>'+
            '<td>{{p.telefone}}</td>'+
            '<td>{{p.cpf}}</td>'+
            '<td>{{p.cnpj}}</td>'+
        '</tr>'+
    '</table>'
})