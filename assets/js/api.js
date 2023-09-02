/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */


'use strict';

const api_key = "de744c62ee2c2ae907c823148e7daa41";

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
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=de744c62ee2c2ae907c823148e7daa41`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=de744c62ee2c2ae907c823148e7daa41`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=de744c62ee2c2ae907c823148e7daa41`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=de744c62ee2c2ae907c823148e7daa41`
    },
    /**
     * 
     * @param {string} query Search query e.g.:"London", "New York"
     * @returns 
     */
    goe(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${Name},${state},${country}&limit=5&appid=de744c62ee2c2ae907c823148e7daa41`
    }
    
}
