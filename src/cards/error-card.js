const renderError = (message, secondaryMessage="") => {
    return `
        <div>
            <style>
                .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
                .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
                .gray { fill: #858585 }
            </style>
            <text x="25" y="45" class="text">Something went wrong! file an issue at <br> https://github.com/mechdeveloper/credly-readme-widget</text>
            <br>
            <text data-testid="message" x="25" y="55" class="text small">
                <tspan x="25" dy="18">${message}</tspan>
                <br>
                <tspan x="25" dy="18">${secondaryMessage}</tspan>
            </text>
        </div>
    `;
};

module.exports = renderError