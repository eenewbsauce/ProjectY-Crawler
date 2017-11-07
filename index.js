const crawl = require('osmosis');

crawl
    .get('https://stackoverflow.com/jobs?sort=i&l=Remote&d=20&u=Km')
    .find('.-job-item')
    .set({
        link: 'a.job-link@href',
        title: '.-title h2',
        date: '.-posted-date'
    })
    .data((data) => {
        console.dir(data)
    })
    .log(console.log)
    .error(console.log)