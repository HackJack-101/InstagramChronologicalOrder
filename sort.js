function sortInstagram() {
    let medias = [];
    let articles = document.getElementsByTagName('article');
    let parent = articles[0].parentElement;
    let i = 0;
    let iMax = articles.length;
    for (; i < iMax; i++) {
        let node = articles[i];
        let time = node.getElementsByTagName('time')[0].getAttribute('datetime');
        medias.push({node, time});
    }

    // Instagram need the last loaded media to load the next content when the user scroll down.
    let lastItem = articles[iMax - 1];
    // We hide the last loaded media to avoid post duplication
    lastItem.style.display = 'none';

    medias = medias.sort((a, b) => {
        return b.time.localeCompare(a.time);
    });

    parent.innerHTML = '';

    medias.forEach((e) => {
        parent.appendChild(e.node);
    });
    // We add the last loaded media. It is invisible for the user.
    parent.appendChild(lastItem);
}

sortInstagram();