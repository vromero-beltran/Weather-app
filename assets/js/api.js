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
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${api_key}`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&appid=${api_key}`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${api_key}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=${api_key}`
    },
    /**
     * 
     * @param {string} query Search query e.g.:"London", "New York"
     * @returns 
     */
    goe(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?${query}&limit=5&appid=${api_key}`
    }
    
}
