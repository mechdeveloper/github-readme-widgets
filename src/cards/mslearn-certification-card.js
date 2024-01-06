const themes = require("../../themes");

function isValidHexColor(hexColor) {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/,
  ).test(hexColor);
}

function isValidGradient(colors) {
  return isValidHexColor(colors[1]) && isValidHexColor(colors[2]);
}

function fallbackColor(color, fallbackColor) {
  let colors = color.split(",");
  let gradient = null;

  if (colors.length > 1 && isValidGradient(colors)) {
    gradient = colors;
  }

  return (
    (gradient ? gradient : isValidHexColor(color) && `#${color}`) ||
    fallbackColor
  );
}

function getCardColors({
  title_color,
  text_color,
  icon_color,
  bg_color,
  border_color,
  theme,
  fallbackTheme = "default",
}) {
  const defaultTheme = themes[fallbackTheme];
  const selectedTheme = themes[theme] || defaultTheme;
  const defaultBorderColor =
    selectedTheme.border_color || defaultTheme.border_color;

  // get the color provided by the user else the theme color
  // finally if both colors are invalid fallback to default theme
  const titleColor = fallbackColor(
    title_color || selectedTheme.title_color,
    "#" + defaultTheme.title_color,
  );
  const iconColor = fallbackColor(
    icon_color || selectedTheme.icon_color,
    "#" + defaultTheme.icon_color,
  );
  const textColor = fallbackColor(
    text_color || selectedTheme.text_color,
    "#" + defaultTheme.text_color,
  );
  const bgColor = fallbackColor(
    bg_color || selectedTheme.bg_color,
    "#" + defaultTheme.bg_color,
  );

  const borderColor = fallbackColor(
    border_color || defaultBorderColor,
    "#" + defaultBorderColor,
  );

  return { titleColor, iconColor, textColor, bgColor, borderColor };
}

const renderBadgesCard = (badges, theme="default") => {
    // console.log(`badges-card: BEGIN`);
    // const theme = "default";

    // returns theme based colors with proper overrides and defaults
    const title = `Microsoft Learn Active Certifications`;
    const totalCount = badges.certificationData.totalActiveCertifications;

    // console.log(theme);

    // titleColor = `#white`;
    // textColor = `#black`;
    // bgColor = `#000000`;
    // borderColor = `#ffffff`;

    // returns theme based colors with proper overrides and defaults
    const { titleColor, textColor, iconColor, bgColor, borderColor } =
    getCardColors({
      // title_color,
      // icon_color,
      // text_color,
      // bg_color,
      // border_color,
      theme
    });

    let certItems = ` `;
    let certItemPropY = 0;

    // badges.data.forEach(function (item, i ) {
    // for (const item of badges.data) {
    for (let i = 0; i < 5; i++) {
        certItems += `<text x="0" y="${certItemPropY}" class="cert-text">${badges.certificationData.activeCertifications[i].name}</text>`;
        certItemPropY += 20;   
    }

    let badgesCard = `
        <svg version="1.1"
            width="595" 
            height="195"
            viewBox="0 0 595 195"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" >

            <style>
              .header {
                font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                fill: ${titleColor};
                animation: fadeInAnimation 0.8s ease-in-out forwards;
              }
              @supports(-moz-appearance: auto) {
                /* Selector detects Firefox */
                .header { font-size: 15.5px; }
              }
              .cert-text {
                font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; 
                fill: ${textColor};
              }
            </style>
            
            <rect data-id="card-bg" 
              x="2" 
              y="2" 
              rx="5"
              width="99%" 
              height="99%"
              stroke="${borderColor}"
              fill="${bgColor}"
              stroke-width="2"
              stroke-opacity="1"
            />

            <g data-id="card-title" 
              transform="translate(25, 35)">

                <g transform="translate(0, 0)">
                  <text
                    x="0"
                    y="0"
                    class="header"
                    data-testid="header">
                        ${title}
                  </text>
                </g>
            </g>

            <g data-id="main-card-body"
              transform="translate(25, 75)">
              ${certItems}
            </g>
        </svg>
    `
    // console.log(`badges-card: ${badgesCard}`);
    // console.log(`badges-card: END`);
    return `${badgesCard}`;

};

module.exports = renderBadgesCard