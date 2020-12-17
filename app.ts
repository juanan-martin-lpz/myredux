import { Store } from './myngrx/store';
import { AppState, contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';
// Mas acciones aqui


/*----------------------------------------------------------------------------------------

  La secuencia es sencilla: Creamos una instancia del Store, accesible a nivel global
  (en Angular con NgRx es inyectable) y a partir de ahi podemos despachar las acciones
  al Store para que el reducer nos devuelva el nuevo estado dentro de dicho store

-----------------------------------------------------------------------------------------*/

// Estado inicial
const initialState: AppState = {
    contador: 10
};


const store = new Store<AppState>(contadorReducer, initialState);

console.log(store.getState());

store.dispatch(incrementadorAction);

console.log(store.getState());
