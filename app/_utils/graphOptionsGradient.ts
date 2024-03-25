export const optionsBarVertical = {
    indexAxis: "y" as const,
    scales: {
        x: {
            min: 0,
            max: 9,
            ticks: {
                stepSize: 1,
            },
        },
    },
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

export const optionsBarHorizontal = {
    indexAxis: "x" as const,
    scales: {
        y: {
            ticks: {
                stepSize: 1,
            },
        },
    },
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

export const optionsLine = {
    scales: {
        x: {
            ticks: {
                stepSize: 10,
            },
        },
        y: {
            ticks: {
                stepSize: 1,
            },
        },
    },
    elements: {
        bar: {
            borderWidth: 0.1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

export function createGradientVertical(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, -50, 470, 0);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(0.5, "SpringGreen");
    gradient.addColorStop(0.7, "yellowGreen");
    gradient.addColorStop(1, "orangeRed");
    return gradient;
}

export function createGradientHorizontal(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 480, -50, 0);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(0.5, "SpringGreen");
    gradient.addColorStop(0.7, "yellowGreen");
    gradient.addColorStop(1, "orangeRed");
    return gradient;
}
