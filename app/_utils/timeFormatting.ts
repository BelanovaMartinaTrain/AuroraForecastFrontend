export const toSingleDay: Intl.DateTimeFormatOptions = {
    day: "numeric",
};

export const toDayAndMonth: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
};

export const toHoursAndMinutes24h: Intl.DateTimeFormatOptions = {
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
};

export const toHoursAndMinutes12h: Intl.DateTimeFormatOptions = {
    hourCycle: "h12",
    hour: "2-digit",
    minute: "2-digit",
};
