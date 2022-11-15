const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken (){
    return lamp.src.indexOf ( 'lampada_quebrada' ) > -1
}

//indexOf -> é utilizado para encontrar um valor dentro de 
//uma string ou array caso o valor não seja encontrado, ele retorna -1

//src -> utiliza-se quando queremos carregar e inserir o conteúdo do 
//link naquele local da página 

function lampOn () {
    if (!isLampBroken ()){
    lamp.src = './img/lampada_ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken ()){
    lamp.src = './img/lampada_desligada.jpg';    
    }    
}

function lampBroken (){
    lamp.src = './img/lampada_quebrada.jpg';
}

//(ADICIONA PRIMEIRO A AÇÃO E DEPOIS O RESULTADO QUE DEVERA OCORRER)
turnOn.addEventListener ( 'click', lampOn );
//Lâmpada ligar ao clicar no button
turnOff.addEventListener ( 'click', lampOff );
//Lâmpada desligar ao clicar no button
lamp.addEventListener ('mouseover', lampOn );
//Ao passar o mouse pela imagem, a lâmpada ira ligar
lamp.addEventListener ('mouseleave', lampOff );
//Ao passar o mouse pela imagem, a lâmpada ira desligar
lamp.addEventListener ('dblclick', lampBroken );
//Dois clicks a lâmpada ira quebrar
