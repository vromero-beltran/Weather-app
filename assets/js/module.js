/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone TimesZone shift from UTC in seconds
 * @returns {string} Data String. formate: "Sunday10,Jan"
 */

export const getData = function(dateUnix, timezone) {
    const data = new DataTransfer((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[data.getUTCDay()];
    const monthName = monthNames[data.getUTCMonth()];

    return `${weekDayName} ${data.getUTCDay()} ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */

export const getDate = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = data.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps  Metter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph /1000
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is conidered satisfactory, and air pollution poses little or no risk.",
    },
    2: {
        level:"Fair",
        message:"Air quality is acceptable, however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollutuin."
    },
    3: {
        level:"Moderate",
        message:"Members of sensitive grounps may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message:"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level:"Very Poor",
        message:"Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
}