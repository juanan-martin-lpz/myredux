import { Reducer, Action } from './myngrx';


/*----------------------------------------------------------------------------------------

  Definimos el Store. Es una clase generica que internamente tendra una instancia
  del tipo T con la que la construyamos y que nos provee de metodos para acceder
  al estado y para despachar las acciones al reducer.

-----------------------------------------------------------------------------------------*/


export class Store<T> {

    state: T;

    constructor(private reducer: Reducer<T>, state: T) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    dispatch(accion: Action) {

        this.state = this.reducer(this.state, accion);
    }
}
