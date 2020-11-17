interface WikiSearchResultPage {
  description: string;
  descriptionsource: string;
  extract: string;
  index: number;
  ns: number;
  pageid: number;
  title: string;
}

interface WikiSearch {
  results: WikiSearchResultPage[];
}

interface MessageData {
  username: string;
  content: string;
  timestamp: Date;
  room: string;
}

interface RawMessage {
  Owner: string;
  Group: string;
  Time: string;
  Text: string;
}

interface UserMessage extends MessageData {
  me: boolean;
}

declare module Weather {
  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }

  interface DayInfo {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  }

  interface AstroInfo {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
  }

  interface HourInfo {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: string;
    will_it_snow: number;
    chance_of_snow: string;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
  }

  interface ForecastDay {
    date: string;
    date_epoch: number;
    day: DayInfo;
    astro: AstroInfo;
    hour: HourInfo[];
  }

  interface CurrentWeatherData {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }

  interface Forecast {
    forecastday: ForecastDay[];
  }

  interface CurrentResponse {
    location: Location;
    current: CurrentWeatherData;
  }

  interface ForecastResponse {
    location: Location;
    forecast: Forecast;
  }
}
export type {
  WikiSearchResultPage,
  WikiSearch,
  MessageData,
  RawMessage,
  UserMessage,
  Weather,
};
