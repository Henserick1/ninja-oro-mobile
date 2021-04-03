/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
}


var goldAcum = 0;

function farmGold(){
    
    var randomNum =Math.floor(Math.random() * (20 - 10) + 10);
    goldAcum=goldAcum+randomNum;
    var puntaje = document.createTextNode(goldAcum);
    document.getElementById('tablero').textContent="";
    document.getElementById('tablero').appendChild(puntaje);
    

    var parrafo = document.createElement("P");
    parrafo.id ="registro";
    parrafo.textContent="Ganaste"+randomNum+" de oro en la Granja!!!";
    document.getElementById("registroDiv").appendChild(parrafo);
}


function caveGold(){
    
    var randomNum =Math.floor(Math.random() * (10 - 5) + 5);
    goldAcum=goldAcum+randomNum;
    var puntaje = document.createTextNode(goldAcum);
    document.getElementById('tablero').textContent="";
    document.getElementById('tablero').appendChild(puntaje);
    

    var parrafo = document.createElement("P");
    parrafo.id ="registro";
    parrafo.textContent="Ganaste"+randomNum+" de oro en la Cueva!!!";
    document.getElementById("registroDiv").appendChild(parrafo);
}

function houseGold(){
    
    var randomNum =Math.floor(Math.random() * (5 - 2) + 2);
    goldAcum=goldAcum+randomNum;
    var puntaje = document.createTextNode(goldAcum);
    document.getElementById('tablero').textContent="";
    document.getElementById('tablero').appendChild(puntaje);
    

    var parrafo = document.createElement("P");
    parrafo.id ="registro";
    parrafo.textContent="Ganaste"+randomNum+" de oro en la Casa!!!";
    document.getElementById("registroDiv").appendChild(parrafo);
}

function casinoGold(){
    var gananciaPerdida = Math.random();
    
    var randomNum =Math.floor(Math.random() * (50 - 0) + 0);
    if(gananciaPerdida >=0.5){
        goldAcum=goldAcum+randomNum;
    }
    if(gananciaPerdida <0.5){
        goldAcum=goldAcum-randomNum;
    }
    var puntaje = document.createTextNode(goldAcum);
    document.getElementById('tablero').textContent="";
    document.getElementById('tablero').appendChild(puntaje);


    var parrafo = document.createElement("P");
    parrafo.id ="registro";
    if(gananciaPerdida >=0.5){
        parrafo.textContent="Ganaste"+randomNum+" de oro en el Casino!!!";
    }
    if(gananciaPerdida <0.5){
        parrafo.textContent="Perdiste"+randomNum+" de oro en el Casino!!!:_(";
    }
    
    document.getElementById("registroDiv").appendChild(parrafo);
    
}



let hammerFarm = new Hammer(document.getElementById('farmDiv'))
hammerFarm.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
hammerFarm.on('swipeup', event => {
    let type = event.type
    
    if (type === 'swipeup')  {
        farmGold();
    }
    
    
})

let hammerCave = new Hammer(document.getElementById('caveDiv'))
hammerCave.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
hammerCave.on('swipeup', event => {
    let type = event.type
    
    if (type === 'swipeup')  {
        caveGold();
    }
})

let hammerHouse = new Hammer(document.getElementById('houseDiv'))
hammerHouse.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
hammerHouse.on('swipeup', event => {
    let type = event.type
    
    if (type === 'swipeup')  {
        houseGold();
    }
})

let hammerCasino = new Hammer(document.getElementById('casinoDiv'))
hammerCasino.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    
hammerCasino.on('swipeup', event => {
    let type = event.type
    
    if (type === 'swipeup')  {
        casinoGold();
    }
})
    
