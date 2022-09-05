"use strict";

export default class EratosthenesCorrecta{

    /*
    Con respecto al programa de la Coladera de Eratostenes, vamos desglosando el texto
    paso 1: Cree un arreglo con todos los elementos inicializados en 1
    NOTA: los elementos del arreglo con subíndices primos se quedarán en 1, los demás van a cambiar en algún momento
    paso 2: comenzando por el subíndice 2 (de ahí al final)
     cada vez que halle un elemento en 1
          hacer un ciclo por el resto del arreglo y ponemos en 0 todos los elementos cuyo subindice sea multiplo del indice de arriba
    */ 
    constructor(){
        //Esa es la información en partes, por lo tanto empezaríamos creando un array con todos sus elementos en 1
        this.numeros = new Array();
    }

    calculoPrimo(){
        //requerimos un ciclo para todo el arreglo
        for (let i=0;i<=1000;i++){
            this.numeros.push(1);
        }
        //Ahora comenzando por el subíndice 2 (o directo el numero 2 y hasta el final)
        for (let i=2;i<=1000;i++){ //cada vez que hallemos un 1
            if (this.numeros[i]==1) {  
                //nos pode hacer un ciclo por el resto del arreglo  si la i es 2...  donde empieza el resto el arreglo?
                //si la i es 3 o 5, donde empieza el resto del arreglo? es claro que una posición adelante
                for (let j=i+1;j<=1000;j++){ //del valor de i, empezamos 1 adelante
                    if(this.numeros[i]==1){ //se cambia a 0
                        this.numeros[j]=0
                    }; 
                    //Después solo debemos recorrer de nuevo el arreglo para ver cuales quedaron en 1  e imprimir el numero i
                    return this.numeros;
                } 
            }
        }                
    }
}
//Se puede optimizar, pero la idea es que si seguimos las instrucciones tal cual están escritas, tenemos la solución que nos piden.