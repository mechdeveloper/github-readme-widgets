const renderBadgesCard = (badges) => {
    // console.log(`badges-card: BEGIN`);
    const totalCount = badges.metadata.total_count;
    let transformX = 0;
    let transformY = 0;

    let badgesCard = '<svg width="100%" height="100%" id="credly-badger-main" fill="none" xmlns="http://www.w3.org/2000/svg" >'

    badges.data.forEach(function (item, i ) {
        // console.log('%d: %s', i, item.id);
        badgesCard += `<g transform="translate(${transformX},${transformY})">`
        badgesCard += `<image width="100" height="100" href="${item.image_url}" />`
        badgesCard += `</g>`
        // badgesCard += `<a href="${item.badge_template.url}">`;
        // badgesCard += `<img width="120" height="120" alt="${item.badge_template.name}" src="${item.image_url}" />`
        // badgesCard += '</a>';
        transformX += 100;
    });

    // badgesCard += '</div></foreignObject></svg>';
    badgesCard += '</svg>';
    
    // console.log(`badges-card: ${badgesCard}`);
    // console.log(`badges-card: END`);
    return `${badgesCard}`;
};

module.exports = renderBadgesCard