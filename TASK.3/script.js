
const images = [
    
  "https://i.makeagif.com/media/2-07-2017/BZOim8.gif",
  "https://images.says.com/uploads/story_source/source_image/1066034/0854.gif",
  "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=1024x1024&w=is&k=20&c=yyW-_jyvFx0SkypeM0BViBVxHTgGb5tg7Wd7MUUn04U=",
  "https://www.adbhutbharat.com/media/common_images/cms_1554983131giphy.gif",
  "https://media-cdn.tripadvisor.com/media/photo-s/06/0b/84/86/bahai-lotus-temple.jpg"
];

let current = 0;

function showImage(index) {
  const img = document.getElementById("carouselImage");
  if (img) {
    img.src = images[index];
  }
}

function nextSlide() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// Call on page load
document.addEventListener("DOMContentLoaded", () => {
  showImage(current);
});

// ========== WEATHER API ==========
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  console.log("City entered:", city);

  const apiKey = "e19fadd0b28f3badb3921d476355235a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={e19fadd0b28f3badb3921d476355235a}`;
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&_=${new Date().getTime()}`;

  const resultDiv = document.getElementById("weatherResult");
  resultDiv.textContent = "Loading...";

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name } = data;
      const { temp } = data.main;
      const { description } = data.weather[0];
      const { speed } = data.wind;

      resultDiv.innerHTML = `
        <strong>${name}</strong><br>
        🌡 Temperature: ${temp}°C <br>
        🌥 Weather: ${description} <br>
        💨 Wind Speed: ${speed} m/s
      `;
    })
    .catch(error => {
      resultDiv.textContent = ` Error: ${error.message}`;
      console.error("Error fetching weather:", error);
    });
}


// == Home/About== 
function showHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}

function showAbout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
}
