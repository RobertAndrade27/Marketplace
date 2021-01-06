import types from './types';
export function setCustomer (customer) {
    return { type : types.SET_CUSTOMER, customer}
}

export function requestPetshops () {
    return { type : types.REQUEST_PETSHOPS};
}

export function setPetshops(petshops){
    return {type: types.SET_PETSHOPS, petshops}
}

export function setShopMapSelected(petshops){
    return {type: types.SET_PETSHOP_MAP_SELECTED, petshops}
}

export function setMapCenter(location){
    return {type: types.SET_MAP_CENTER, location}
}