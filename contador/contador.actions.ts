import { Action } from '../myngrx/myngrx';


/*----------------------------------------------------------------------------------------

  Definimos las acciones que vamos a soportar por medio de la interfaz Action
  Pueden llevar o no un "payload" que simplemente son parametros que le pasamos
  a la accion. En este caso estan integrados en el objeto

-----------------------------------------------------------------------------------------*/


// Esta es la forma en la que nos encontraremos las acciones en NgRx

// export class incrementadorAction implements Action = {
//     type: 'INCREMENTAR'
//     constructor(public payload) {}
// }


// Accion implementada
export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

// Accion implementada
export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

// Accion implementada
export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

// Accion implementada
export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}

// Accion implementada
export const resetAction: Action = {
    type: 'RESET'
}
