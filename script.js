//comunicaçao com banco de dados - no_sql - json

fetch ('dados.json').then(resposta=> resposta.json()).then(banco=>{
    console.log(banco)

    //FRONT-END
    document.getElementById('imagem').innerHTML = banco[3].imagemprodutos.image001
    document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend456
    document.getElementById('preco').innerHTML = banco[2].preco.preco789
    document.getElementById('produtos').innerHTML = banco[0].produtos.prod123
    document.getElementById('cliente').innerHTML = banco[4].usuario.cliente001

    document.getElementById('imagem2').innerHTML = banco[3].imagemprodutos.image002
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457
    document.getElementById('preco2').innerHTML = banco[2].preco.preco790
    document.getElementById('produtos2').innerHTML = banco[0].produtos.prod124
    document.getElementById('cliente2').innerHTML = banco[4].usuario.cliente002

    document.getElementById('imagem3').innerHTML = banco[3].imagemprodutos.image003
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458
    document.getElementById('preco3').innerHTML = banco[2].preco.preco791
    document.getElementById('produtos3').innerHTML = banco[0].produtos.prod125
    document.getElementById('cliente3').innerHTML = banco[4].usuario.cliente003
    
    document.getElementById('imagem4').innerHTML = banco[3].imagemprodutos.image004
    document.getElementById('vendedor4').innerHTML = banco[1].vendedor.vend459
    document.getElementById('preco4').innerHTML = banco[2].preco.preco792
    document.getElementById('produtos4').innerHTML = banco[0].produtos.prod126
    document.getElementById('cliente4').innerHTML = banco[4].usuario.cliente004
})
