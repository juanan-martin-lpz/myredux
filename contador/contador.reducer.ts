import { Action } from "../myngrx/myngrx";


/*----------------------------------------------------------------------------------------

  Definimos el reducer. En una funcion pura que no accede a ningun dato externo sino que
  depende unica y exclusivamente de los parametros que le pasan. Tampoco tiene que tener
  "efectos" secundarios, como escribir en algun archivo y por ultimo no debe modificar
  los valores que le pasan sino que debe retornar un valor nuevo

  -----------------------------------------------------------------------------------------*/

// Reducer
// En este caso el State es de un tipo primitivo. Si fuera un objeto
// habria que destructurarlo
// { ...state, state.contador += 1 }

export function contadorReducer(state = 10, accion: Action) {

    switch (accion.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * accion.payload;
        case 'DIVIDIR':
            return state / accion.payload;
        case 'RESET':
            return 0;

    }

    return state;
}
