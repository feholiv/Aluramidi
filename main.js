function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const instrumento = listaDeTeclas[i].classList[1]; //classList[1] refere-se a segunda classe das teclas (começa a contar a partir de 0), sendo assim, a segunda classe, por exemplo, da tecla Pom é: tecla_pom, junto ao "som_" forma o id som_tecla_pom, justamente o id que a tag audio possui

    //template string
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[i].onclick = function () {

        tocaSom(idAudio);
    }

    listaDeTeclas[i].onkeydown = function (evento) {

        if (evento.code == 'Space' || 'Enter') { //evento.code pois ao clicarmos em uma tecla, gera-se um evento, contendo várias informações, dentre elas o code, que representa a tecla pressionada, portanto, se evento.code for igual a tecla que queremos, a função if será acionada positivamente
            listaDeTeclas[i].classList.add('ativa');
        }
    }

    listaDeTeclas[i].onkeyup = function () {

        listaDeTeclas[i].classList.remove('ativa');

    }


}














/*
Código se pegassemos seletor por seletor do nosso código, o que não é viável, já que devemos trabalhar com vários elementos de uma vez só, ao invés de elemento por elemento
function tocaSomPom(){

    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //se eu colocar o () aqui, junto ao sinal de = a função será executada sem que antes o usuário faça um clique no botão, portanto, atribuimos essa função sem o ()
*/