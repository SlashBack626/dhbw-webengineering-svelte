# Webengineering Exam

This project is the result for the Exam in Webengineering from DHBW

## Chosen tasks

- Display weather data
- Implement Groupchat
- Work with Typescript
- Write your own CSS
- Use a Javascript Framework (Svelte)

## Prerequisite

For this project to work you need a valid API Key from [weatherapi.com](). Create a free account and copy your API key.

## Installation

1. Clone this repository:<br>
   `git clone https://github.com/SlashBack626/dhbw-webengineering-svelte`

2. Navigate to the root folder of this project:<br>
   `cd dhbw-webengineering-svelte`

3. install dependencies:<br>
   `npm i`

4. setup Environment Variables:<br>
   | Variable | Value | Default| Required|
   |----------|-------|--------|---------|
   | PORT | \<Your preferred PORT> | 5000| :x: |
   | WEATHER_API | \<Your API key from weatherapi.com> | None| :heavy_check_mark:

   in Windows Powershell you would write it like this:<br>

   ```ps
   $env:PORT=<PORT>
   $env:WEATHER_API=<API KEY>
   ```

5. `npm start`

6. open browser: localhost:\<PORT><br>
   e.g. [localhost:5000]()

A live version can be found at [http://svelte-dhbw-webengineering.herokuapp.com/]()
