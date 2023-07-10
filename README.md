# Personal Dashboard Desktop App

This is a simple desktop app built using JavaScript that displays a personal dashboard with various information such as the current time, weather, a random nature background image, cryptocurrency data, and a notes feature.

## Features
The app includes the following features:

- Displays the current time.
- Fetches and displays the weather information based on the user's current location.
- Fetches a random nature background image and sets it as the app's background.
- Fetches and displays cryptocurrency data for Dogecoin.
- Allows users to create and save personal notes.
- Customizable new tab page with a Chrome extension.

## Prerequisites
To run this app, you need the following:

- A web browser that supports JavaScript and the Fetch API.
- An internet connection to fetch data from the APIs.

## Getting Started
To use the app, follow these steps:

1. Clone the repository or download the files to your local machine.
2. Open the index.html file in a web browser.

## Usage
The app will automatically fetch the required data and update the dashboard with the following information:

- Current time: The app displays the current time in a 12-hour format.
- Weather: The app fetches the weather information based on your current location and displays the temperature, weather icon, and city name.
- Background image: The app fetches a random nature background image and sets it as the app's background.
- Cryptocurrency data: The app fetches the latest data for Dogecoin and displays the current price, highest price in the last 24 hours, and lowest price in the last 24 hours.
- Notes: The app allows you to create and save personal notes. You can add, edit, and delete notes to keep track of important information.


## Customization
The app can be customized by modifying the code in the index.js file. Here are some possible customizations:

- Background Image: You can change the default background image by replacing the URL in the document.body.style.backgroundImage line with the URL of your preferred image.

- Weather API: If you want to fetch weather data from a different API or customize the data displayed, you can modify the URL in the fetch function that fetches weather data. Make sure the new API provides weather data in a compatible format.

- Cryptocurrency: If you want to display data for a different cryptocurrency, you can modify the URL in the fetch function that fetches cryptocurrency data. Make sure the new API provides data for the desired cryptocurrency in a compatible format.

## Manifest File
The manifest.json file provides configuration details for the app when used as a Chrome extension. It specifies the app's name, version, description, default icon, and Chrome URL override for the new tab page.

## Credits
This app was created for practicing asynchronous JavaScript and uses various APIs to fetch data. The APIs used are credited in the code.

## License
This app is released under the MIT License. Please see the LICENSE file for more details.
