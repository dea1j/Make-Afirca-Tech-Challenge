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

    function deleteActivity(passedIndex) {
        const newList = activityList.filter((value, currentListIndex) => currentListIndex != passedIndex)
            setActivityList(newList);
        }
    }

   return (
        <div className="container p-5">
            <div className="card container p-3 col-md-6">
                <h3>Add Activity</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control mb-3" id="input" />
                        <input type="button" id="add-list" className="btn btn-success" value="Add to list" />
                    </div>
                    <ul id="activity-list" className="list-group mb-2">
                        {activityList.map((activity, index) => {
                            return (
                            <li className='list-group-item' key={index}>
                                <div>
                                    {activity.title}
                                    <button id="delete" className="btn btn-danger float-right">Delete</button>
                                </div>
                                
                            </li>
                            )
                        })}
                    </ul>
                </form>
            </div>
        </div>
    )
}
