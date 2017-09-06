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

    medias = medias.sort((a, b) => {
        return b.time.localeCompare(a.time);
    });

    parent.innerHTML = '';

    medias.forEach((e) => {
        parent.appendChild(e.node);
    });
}

sortInstagram();