const people = [
    { name: 'david' },
    { name: 'pearl' },
    { name: 'kevin' },
    { name: 'steve' },
    { name: 'coco' },
    { name: 'brock' },
    { name: 'rock' }
];

const searchInput = document.getElementById('search');
const list = document.getElementById('list');

const searches = search => {
    let matches = people.filter(person => {
        const regex = new RegExp(`${search}`, 'gi');
        return person.name.match(regex)
    })
         console.log(matches)
    if (search.length === 0) {
        person = [];
        list.innerHTML = [];
    }
    outputHtml(matches)
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <h3>${match.name}</h3>
        `)
        .join('');
        list.innerHTML = html;
    }
}

searchInput.addEventListener('input', () => searches(searchInput.value))