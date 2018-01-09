
import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
switch(action.type){

case FETCH_WEATHER:
  //return state.concat([action.payLoad.data]); same as the below statement
  return [action.payLoad.data, ...state];
}
return state;
}
