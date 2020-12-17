import { Action } from "../myngrx/myngrx";


/*----------------------------------------------------------------------------------------

  Definimos el reducer. En una funcion pura que no accede a ningun dato externo sino que
  depende unica y exclusivamente de los parametros que le pasan. Tampoco tiene que tener
  "efectos" secundarios, como escribir en algun archivo y por ultimo no debe modificar
  los valores que le pasan sino que debe retornar un valor nuevo

  -----------------------------------------------------------------------------------------*/

// Definimos la interfaz donde almacenaremos los datos de la aplicacion
export interface AppState {
    contador: number;
}



// Reducer
export function contadorReducer(state: AppState, accion: Action) {

    switch (accion.type) {
        case 'INCREMENTAR':
            return { ...state, contador: state.contador += 1 };
        case 'DECREMENTAR':
            return { ...state, contador: state.contador -= 1 };
        case 'MULTIPLICAR':
            return { ...state, contador: state.contador * accion.payload };
        case 'DIVIDIR':
            return { ...state, contador: state.contador / accion.payload };
        case 'RESET':
            return { ...state, contador: 0 };

    }

    return state;
}
