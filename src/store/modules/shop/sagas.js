import { takeLatest, all, call, put } from 'redux-saga/effects';
import types from './types'
import api from '../../../services/api'
import { setPetshops} from './actions'

// Função Genérica -> * equialente ao async porém mais avançado

export function* requestPetshops () {
    const response = yield call (api.get, '/petshops');
    const res = response.data
    yield put(setPetshops (res.petshops));
}

export default all ([takeLatest(types.REQUEST_PETSHOPS, requestPetshops)]);