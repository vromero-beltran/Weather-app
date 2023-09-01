/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

import { fetchData, url } from "./api.js";
import * as module from "./module.js";

/**
 * Add event listener on multiple elements
 * @param {NodeList} element Eelements node array
 * @param {string} eventType Event Type e.g.: "click", "mouseover"
 * @param {Function} callback  Callback function
 */

const addEventOnElement = function(element, eventType, callback) {
    for (const element of elements) element.addEventOnElement(eventType, callback);
}

const searchView = document.quarySelectorAll("[data-search-view]");
const searchTogglers = document.quarySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElement(searchTogglers, "click", toggleSearch)

const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input", function () {

    searchTimeout ?? clearTimeout(searchTimeout);

    if (!searchField.value) {
        searchResult.classList.remove("active");
        searchResult.innerHTML = "";
        searchField.classList.remove("searching");
    } else {
        searchField.classList.add("searching");
    }

    if (searchField.value) {
        searchTimeout = setTimerout(() => {
            fetchData(url.goe(searchField.value), function (locations) {
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = `
                <ul class="view-list" data-search-list></ul>
            `;

            const /**{NodeList} | [] */ items = [];

            for (const { name, lat, lon, country, state } of locations) {
            const searchItem = document.createElement("li");
            searchItem.classList.add("view-item");

            searchItem.innerHTML = `
                <span class="m-icon">location_on</span>

                <div>
                    <p class="item-subtitle">${name}</p>

                    <p class="label-2 item-subtitle">${state || ""}, ${country}</p>
                </div>

                <a href="#/waether?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
            `;

            searchResult.quarySelector("[data-search-lisy]").appendChild(searchItem);
            items.push(searchItem.querySelector("[data-search-toggler]"));
            }   

            addEventOnElement(items, "click", function () {
                toggleSearch();
                searchResult.classList.remove("active");
            })
            });
        }, searchTimeoutDuration);
    }


});

const container = document.querySelector("[data-container]");
const loading = document.querySelector("[data-loading]");
const currentLocationBtn = document.querySelector("[data-current-location-btn]");
const errorContent = document.querySelector("[data-error-content]");

/**
 * Render all weather data in html page
 * @param {number} lat latitude
 * @param {number} lon longitude
 */

export const updateWeather = function (lat, lon) {
    //loading.computedStyleMap,display = "grid";
    container.computedStyleMap.overflow = "hidden";
    container.classList.contains("fade-in");
    errorContent.style.display = "none";

    const currentWeatherSection = document.querySelector("[data-current-weather]");
    const highlightSection = document.querySelector("[data-highlights]");
    const hourlySection = document.querySelector("[data-hourly-forecast]");
    const forecastSection = document.querySelector("[data-5-day-forecast]");

    currentWeatherSection.innerHTML = ""
    highlightSection.innerHTML = "";
    hourlySection.innerHTML = "";
    forecastSection.innerHTML = "";

    if (window.location.hash === "#/current-location") {
        currentLocationBtn.setAttribute("disabled", "");
    } else {
        currentLocationBtn.removeAttribute("disabled");
    }

    fetchData(url.currentWeather(lat, lon), function (currentWeather) {

        const {
            weather,
            dt: dataUnix,
            sys: { sunise: sunriseUnixUTC, sunset: sunsetUnixUTC},
            main: { temp, feels_like, pressure, humidity },
            visibility,
            timezone
        } = currentWeather
        const [{ description, icon }] = weather;

        const card = document.createElement("div");
        card.classList.add("card", "card-lg", "current-weather-card");

        card.innerHTML = `
        <div class="weapper">
            <p class="header">${parseInt(temp)}<sup>c</sup></p>

            <img src="./assets/images/weather_icons/${icon}png" width="64" height="64" alt="${description}" class="weather-icon">
        </div>
        <p class="body-3">${description}</p>

        <ul class="meta-li">

            <li class="meta-item">
                <span class="m-icon">calender_today</span>

                <p class="title-3 meta-text">${module.getDate(dateUnix, timezone)}</p>
            </li>

            <li class="meta-item">
                <span class="m-icon">location_on</span>

                <p class="title-3 meta-text" data-location></p>
            </li>

        </ul>
        `;

        fetchData(url.reverseGeo(lat, lon), function([{ name, country }]) {
            card.quarySelector("[data-location]").innerHTML = `${name}, ${country}`
        })

        currentWeatherSection.appendChild(card);

    });
}

export const error404 = function () { }