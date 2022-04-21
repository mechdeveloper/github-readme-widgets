const renderBadgesCard = (badges) => {
    // console.log(`badges-card: BEGIN`);
    const title = `Certifications and Exams`;
    const totalCount = badges.metadata.total_count;

    let certItems = ` `;
    let certItemPropY = 0;

    // badges.data.forEach(function (item, i ) {
    // for (const item of badges.data) {
    for (let i = 0; i < 5; i++) {
        certItems += `<text x="0" y="${certItemPropY}" class="cert-text">${badges.data[i].badge_template.name}</text>`;
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
                fill: #white;
                animation: fadeInAnimation 0.8s ease-in-out forwards;
              }
              @supports(-moz-appearance: auto) {
                /* Selector detects Firefox */
                .header { font-size: 15.5px; }
              }
              .cert-text {
                font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; 
                fill: #white;
              }
            </style>
            
            <rect data-id="card-bg" 
              x="2" 
              y="2" 
              rx="5"
              width="99%" 
              height="99%"
              stroke="#ffffff"
              fill="#000000"
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