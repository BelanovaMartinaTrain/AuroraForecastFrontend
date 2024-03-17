type ValueOf<T> = T[keyof T];

export type TWeatherAltKey = keyof typeof weatherAlt;
export type TWeatherAltId = ValueOf<typeof weatherAlt>;

export const weatherAlt = {
    "01": "clear sky",
    "02": "fair",
    "03": "partly cloudy",
    "04": "cloudy",
    "40": "light rain showers",
    "05": "rain showers",
    "41": "heavy rain showers",
    "24": "light rain showers and thunder",
    "06": "rain showers and thunder",
    "25": "heavy rain showers and thunder",
    "42": "light sleet showers",
    "07": "sleet showers",
    "43": "heavy sleet showers",
    "26": "light sleet showers and thunder",
    "20": "sleet showers and thunder",
    "27": "heavy sleet showers and thunder",
    "44": "light snow showers",
    "08": "snow showers",
    "45": "heavy snow showers",
    "28": "light snow showers and thunder",
    "21": "snow showers and thunder",
    "29": "heavy snow showers and thunder",
    "46": "light rain",
    "09": "rain",
    "10": "heavy rain",
    "30": "light rain and thunder",
    "22": "rain and thunder",
    "11": "heavy rain and thunder",
    "47": "light sleet",
    "12": "sleet",
    "48": "heavy sleet",
    "31": "light sleet and thunder",
    "23": "sleet and thunder",
    "32": "heavy sleet and thunder",
    "49": "light snow",
    "13": "snow",
    "50": "heavy snow",
    "33": "light snow and thunder",
    "14": "snow and thunder",
    "34": "heavy snow and thunder",
    "15": "fog",
};
