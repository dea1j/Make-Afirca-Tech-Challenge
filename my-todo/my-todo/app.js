const inputValue = document.getElementById('input');
const addToList = document.getElementById('add-list');
const activityListElement = document.getElementById('activity-list');
let dateElement = document.getElementById('time')

let activityList = [
    {
        title: 'Wash the dishes',
        finished: false
    },
    {
        title: 'Mow the lawn',
        finished: false
    },
    {
        title: 'Take a nap',
        finished: false
    }
]

function mapArrayToDOM() {
    activityListElement.innerHTML = '';
    activityList.forEach (function (activity, index) {
        // create child element
        const newActivityDom = document.createElement('li');
        newActivityDom.className = 'list-group-item';

        // Append child to parent element
        activityListElement.appendChild(newActivityDom);

        // create div element
        const activityItemDiv = document.createElement("div");
        activityItemDiv.className = "activity-item";

        // Create delete btn
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger float-right';

        // Create title span
        const titleSpan = document.createElement("span");
        titleSpan.textContent = activity.title;

        // remove item from arrayList
        deleteBtn.onclick = () => {
            event.preventDefault();
            alert(`Delete "${activityList[index].title}" ?`);
            activityList.splice(index, 1);
            mapArrayToDOM();
        };
        
        // Append span and btn to div
        activityItemDiv.appendChild(deleteBtn);
        activityItemDiv.appendChild(titleSpan);

        //Append inner child div to activity child element
        newActivityDom.appendChild(activityItemDiv);
    });
}
mapArrayToDOM();

// Add time
const options ={ weekday:'long', month:'short', day:'numeric', year:'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

// add event to activity list
addToList.addEventListener('click', function(event) {
    event.preventDefault();
    const textInputValue = inputValue.value;

    if(textInputValue === '') return window.alert('Event cannot be empty')
    else {
        activityList.push({
            title: textInputValue,
            finished: false
        });

        mapArrayToDOM();
        document.querySelector('form').reset();
    }
    console.log(activityList)
});

