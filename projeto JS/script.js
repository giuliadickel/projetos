let SeuVotoPara= document.querySelector('.d-1-1 span');
let cargo= document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso= document.querySelector('.d-2');
let lateral= document.querySelector('.d-1-right');
let numeros= document.querySelector('.d-1-3')

let etapaAtual= 0;
let numero ='';
let votoBranco= false;

function comecarEtapa() {

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = '';
    votoBranco = false;

    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0){
            numeroHTML +='<div class="numero pisca"></div>;'
        } else{
        numeroHTML += '<div class="numero"></div>'
        }
    }

    SeuVotoPara.getElementsByClassName.display ='none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}
function atualizaInterface () {
    let etapa = etapas[etapaAtual];
    let candidato= etapa.candidato.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }

    });
    if(candidato.length > 0) {
        candidato=candidato [0];
        SeuVotoPara.style.display = 'block';
        aviso.display= 'block'
        descricao.innerHTML= 'Nome: ${candidato.nome}'<br>'Partido: ${candidato.partido}';

        let fotosHTML = '';
        for(let i in candidato.fotos){
            fotosHTML+='<div class="d-1-image"> <img src="imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>';
        }

        lateral.innerHTML= fotosHTML
    }
    else{
        SeuVotoPara.style.display = 'block';
        aviso.display= 'block';
        descricao.innerHTML = '<div class="aviso--grande">VOTO NULO</div>';
    }

}

function clicou (n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero= `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero !== null) {
        elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function branco (){
    if(numero === '') {
        votoBranco=true;
        SeuVotoPara.style.display = 'block';
        aviso.display= 'block';
        numero.innerHTML='';
        descricao.innerHTML = '<div class="aviso--grande">VOTO EM BRANCO</div>';
    } else{
        alert("Para votar em BRANCO, nao pode ter digitado nenhum numero!")
    }
}

function corrige (){
    comecarEtapa();
}

function confirma (){
    
}

comecarEtapa();