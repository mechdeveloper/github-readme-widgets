const renderBadgesCard = (badges) => {
    // console.log(`badges-card: BEGIN`);
    const totalCount = badges.metadata.total_count;

    let certItems = ` `;
    let certItemPropY = 0;

    // badges.data.forEach(function (item, i ) {
    // for (const item of badges.data) {
    for (let i = 0; i < 5; i++) {
        certItems += `<text x="0" y="${certItemPropY}" class="stagger">${badges.data[i].badge_template.name}</text>>`;
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

            <rect data-id="card-bg" 
              x="0.5" 
              y="0.5" 
              rx="4.5"
              width="99%" 
              height="99%"
              stroke="#ffffff"
              fill="#000000"
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
                        Exams and Certifications
                  </text>
                </g>
            </g>

            <g data-id="main-card-body"
              transform="translate(25, 75)">
            
              <g data-id="Total Badges" 
                transform="translate(425, 50)">
                <text
                    x="0"
                    y="0"
                    font-size="100"
                    class="stagger">
                    10
                </text>
                <text
                    x="0"
                    y="30"
                    font-size="20"
                    class="stagger">
                    Total Badges
                </text>
              </g>
            
              ${certItems}
            </g>
        </svg>
    `



    // console.log(`badges-card: ${badgesCard}`);
    // console.log(`badges-card: END`);
    return `${badgesCard}`;
};

module.exports = renderBadgesCard