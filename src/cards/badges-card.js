const renderBadgesCard = (badges) => {
    // console.log(`badges-card: BEGIN`);
    
    let badgesCard = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><foreignObject width="100%" height="100%"><div align="center" xmlns="http://www.w3.org/1999/xhtml">'

    for (let item of badges.data){
        // console.log(item.id);
        badgesCard += `<a href="${item.badge_template.url}">`;
        badgesCard += `<img width="120" height="120" alt="${item.badge_template.name}" src="${item.image_url}" />`
        badgesCard += '</a>';
    }

    badgesCard += '</div></foreignObject></svg>';
    
    // console.log(`badges-card: ${badgesCard}`);
    // console.log(`badges-card: END`);
    return `${badgesCard}`;
};

module.exports = renderBadgesCard