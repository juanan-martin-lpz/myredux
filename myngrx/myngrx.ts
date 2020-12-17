/*----------------------------------------------------------------------------------------

  Interfaces principales en el patron Redux. Definimos una interfaz para las acciones
  y otra para los Reducers
  
-----------------------------------------------------------------------------------------*/

// Interfaz para las Acciones
export interface Action {
    type: String;
    payload?: any;
}

// Funcion Tipo para el Reducer
export interface Reducer<T> {
    (state: T, action: Action): T;
}
