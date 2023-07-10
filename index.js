// Background 
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beach")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

// Dogecoin
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

//  Time
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

// Weather
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
// Notes
// Function to save notes to local storage
function saveNotes() {
    const notes = document.getElementById("notes-list").innerHTML;
    localStorage.setItem("notes", notes);
}

// Function to load notes from local storage
function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        document.getElementById("notes-list").innerHTML = savedNotes;
        addDeleteListeners();
    }
}

// Function to add delete listeners to each note item
function addDeleteListeners() {
    const noteItems = document.querySelectorAll("#notes-list li");
    noteItems.forEach(function (item) {
        if (!item.classList.contains("listeners-added")) {
            const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa", "fa-trash", "delete-icon");
            item.appendChild(deleteIcon);

            item.addEventListener("mouseenter", function () {
                deleteIcon.style.display = "block";
            });

            item.addEventListener("mouseleave", function () {
                deleteIcon.style.display = "none";
            });

            deleteIcon.addEventListener("click", function (event) {
                event.stopPropagation();
                item.remove();
                saveNotes();
            });

            item.classList.add("listeners-added");
        }
    });
}

// Add event listener to save notes when the "Add Note" button is clicked
document.getElementById("add-note-btn").addEventListener("click", function () {
    const noteInput = document.getElementById("notes-input");
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = noteText;
        document.getElementById("notes-list").appendChild(listItem);
        noteInput.value = "";
        saveNotes();
        addDeleteListeners();
    }
});

// Load saved notes when the page loads
window.addEventListener("load", loadNotes);
