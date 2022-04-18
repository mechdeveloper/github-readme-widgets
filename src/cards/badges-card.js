const renderBadgesCard = (badges) => {
    // console.log(`badges-card: BEGIN`);
    
    let badgesCard = '<div align="center">'

    for (let item of badges.data){
        // console.log(item.id);
        badgesCard += `<a href="${item.badge_template.url}">`;
        badgesCard += `<img width="120" height="120" alt="${item.badge_template.name}" src="${item.image_url}" />`
        badgesCard += '</a>';
    }

    badgesCard += '</div>';
    
    // console.log(`badges-card: ${badgesCard}`);
    // console.log(`badges-card: END`);
    return `${badgesCard}`;
};

module.exports = renderBadgesCard