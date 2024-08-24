document
  .getElementById('weather-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // 防止表單提交刷新頁面

    const city = document.getElementById('city').value;
    const apiKey = '57b7bf0692eda0cd47cf923161c78646'; // 替換為你的 API 密鑰
    const weatherContainer = document.getElementById('weather-container');
    const errorElement = document.getElementById('error');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { name, main, weather, timezone, dt } = data;
      const localTime = new Date((dt + timezone) * 1000).toLocaleString();

      console.log(data);
      document.getElementById('city-name').textContent = `City: ${name}`;
      document.getElementById(
        'temperature'
      ).textContent = `Temperature: ${main.temp}°C`;
      document.getElementById(
        'description'
      ).textContent = `Description: ${weather[0].description}`;
      document.getElementById('timezone').textContent = `Timezone: GMT${
        timezone / 3600
      }`;
      document.getElementById(
        'local-time'
      ).textContent = `Local Time: ${localTime}`;

      weatherContainer.classList.remove('hidden');
      errorElement.classList.add('hidden');
    } catch (error) {
      weatherContainer.classList.add('hidden');
      errorElement.textContent = `Error: ${error.message}`;
      errorElement.classList.remove('hidden');
    }
  });
