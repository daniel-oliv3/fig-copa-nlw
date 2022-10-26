let isIgnite = true;

function changeCard(event) {
    const card = event.currentTarget;
    

    const backgroundImage = isIgnite ? "url(./img/bg-ignite.svg)" : "url(./img/bg-explorer.svg)";
    isIgnite = !isIgnite;

    card.style.backgroundImage = backgroundImage;
}
















