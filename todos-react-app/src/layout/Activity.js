import React, {useState} from 'react';


export default function Activity() {
    const [activityList, setActivityList] = useState([
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
        },
        {
            title: 'Jug 10km',
            finished: false
        }
    ]);

    const [eventInput, setEventInput] = useState("")

    function deleteActivity(passedIndex) {
        const newList = activityList.filter((value, currentListIndex) => currentListIndex !== passedIndex)
            setActivityList(newList);
    }

    const onChangeEventListener = (event) => {
        setEventInput(event.target.value);
    }

    const onSubmit = () => {
        const newList = activityList
        newList.push({
            title: eventInput,
            finished: false
        })
        setActivityList(newList)
        setEventInput('')
    }

   return (
        <div className="container p-5">
            <div className="card container p-3 col-md-6">
                <h3>Add Activity</h3>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit();
                }}
                >
                    <div className="form-group">
                        <input required type="text" onChange={onChangeEventListener} value={eventInput} className="form-control mb-3" id="input" />
                        <input type="submit" id="add-list" className="btn btn-success" value="Add to list" />
                    </div>
                </form>
                <ul id="activity-list" className="list-group mb-2">
                        {activityList.map((activity, index) => {
                            return (
                            <li className='list-group-item' key={index}>
                                <div className='activity-item'>
                                    <span>{activity.title}</span>
                                    <button onClick={() => deleteActivity(index)} className="btn btn-danger float-right">Delete</button>
                                </div> 
                            </li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    )
}
