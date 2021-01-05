import { takeLatest, all } from 'redux-saga/effects';
import types from './types'

// Função Genérica -> * equialente ao async porém mais avançado

export function* requestPetshops () {

}

export default all ([takeLatest(types.REQUEST_PETSHOPS, requestPetshops)]);