/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */


'use strict';

const api_key = "ecc05b585f822770766ff4b55b38e101";

/** 
 * Fetch data from Server
 * @param {string} URL API url
 * @param {Function} callback callback
*/
export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ecc05b585f822770766ff4b55b38e101`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ecc05b585f822770766ff4b55b38e101`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=ecc05b585f822770766ff4b55b38e101`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=ecc05b585f822770766ff4b55b38e101`
    },
    /**
     * 
     * @param {string} query Search query e.g.:"London", "New York"
     * @returns 
     */
    goe(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${Name},${state},${country}&limit=5&appid=ecc05b585f822770766ff4b55b38e101`
    }
    
}
