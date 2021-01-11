


// function getDistanceFromLatLonInKm(position1(center), position2(location)) {
//     "use strict";
//     var deg2rad = function (deg) { return deg * (Math.PI / 180); },
//         R = 6371,
//         dLat = deg2rad(location.lat - center.lat),
//         dLng = deg2rad(location.lng - center.lng),
//         a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
//             + Math.cos(deg2rad(center.lat))
//             * Math.cos(deg2rad(center.lat))
//             * Math.sin(dLng / 2) * Math.sin(dLng / 2),
//         c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return ((R * c *1000).toFixed(2));
// }
// {petshops.map(p => 
//     <Marker {lat={p.center.lat} lng={p.center.lng},
//             {lat={p.location.lat} lng={p.location.lng}
// ));

function getDistanceFromLatLonInKm(position1, position2) {
    "use strict";
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.lat - position1.lat),
        dLng = deg2rad(position2.lng - position1.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(position1.lat))
            * Math.cos(deg2rad(position1.lat))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return ((R * c *1).toFixed(1));
}

var distancia = (getDistanceFromLatLonInKm(
   {lat: -23.57110562, lng: -46.58418083},
   {lat: -23.54209533, lng: -46.66780685}
));

console.log(distancia);