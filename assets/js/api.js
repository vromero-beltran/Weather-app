/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */


'use string';

const api_key = "fc302ec03c33c3d3415386f562e11de4";

/** 
 * Fetch data from Server
 * @param {string} URL API url
 * @param {Function} callback callback
*/
export const fetchData = function(URL, callback) {
    fetch('${URL}&appid=${api_key}')
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fc302ec03c33c3d3415386f562e11de4`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=${hourly}&appid=fc302ec03c33c3d3415386f562e11de4`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=fc302ec03c33c3d3415386f562e11de4`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=fc302ec03c33c3d3415386f562e11de4`
    },
    /**
     * 
     * @param {string} query Search query e.g.:"London", "New York"
     * @returns 
     */
    goe(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${Name},${state},${country}&limit=5&appid=fc302ec03c33c3d3415386f562e11de4`
    }
    
}
