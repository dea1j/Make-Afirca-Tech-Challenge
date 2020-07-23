const people = [
    { name: 'David', track: 'Data Science' }, { name: 'Pearl', track: 'Data Science' }, { name: 'Kevin', track: 'Data Science' }, { name: 'Steve', track: 'Data Science' },
    { name: 'Coco', track: 'Data Science' }, { name: 'Brock', track: 'Data Science' }, { name: 'Rock', track: 'Data Science' }, { name: 'Precious', track: 'Data Science' },
    { name: 'Kanye', track: 'Data Science' }, { name: 'James Dayo', track: 'Full Stack with NodeJs' }, { name: 'Akindele Beulah', track: 'Full Stack with NodeJs' },
    { name: 'Babatunde Awoyemi', track: 'Full Stack with NodeJs' }, { name: 'Bayode Ibironke', track: 'Full Stack with NodeJs' }, { name: 'Felix Banjo', track: 'Full Stack with NodeJs' },
    { name: 'George Erimona', track: 'Full Stack with NodeJs' }, { name: 'Ifeoluwa Oseni', track: 'Full Stack with NodeJs' }, { name: 'Emmanuel', track: 'Full Stack with NodeJs' },
    { name: 'Lihin Ogana', track: 'Full Stack with NodeJs' }, { name: 'Martins', track: 'Full Stack with NodeJs' }, { name: 'Musa Jubril', track: 'Full Stack with NodeJs' },
    { name: 'Nwachukwu Israel', track: 'Full Stack with NodeJs' }, { name: 'Obiagwu Nnamdi', track: 'Full Stack with NodeJs' },
    { name: 'Okechukwu Emmanuel', track: 'Full Stack with NodeJs' }, { name: 'Olamigoke Philip', track: 'Full Stack with NodeJs' },
    { name: 'Oluwaseun', track: 'Full Stack with NodeJs' }, { name: 'Victory Esele', track: 'Full Stack with NodeJs' }
];

const searchInput = document.getElementById('search');
const list = document.getElementById('list');

const searches = search => {
    let matches = people.filter(person => {
        const regex = new RegExp(`^${search}`, 'gi');
        return person.name.match(regex)
    })
    
    console.log(matches)

    if (search.length === 0) {
        matches = [];
        list.innerHTML = [];
    }
    outputHtml(matches)
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card">
            <h2>${match.name}</h2>
            <small>(${match.track})</small>
        </div>
        `)
        .join('');
        list.innerHTML = html;
    }
}

searchInput.addEventListener('input', () => searches(searchInput.value))
