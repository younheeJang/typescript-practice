"use strict";
var profile = {
    name: 'curious',
    age: 999,
    coords: {
        lat: 0,
        lng: 6
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
