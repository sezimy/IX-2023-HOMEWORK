import React, { useState } from 'react';

export default function TaskInput(props) {

    const [name, setName] = useState('');

    function onTaskFormSubmit(e) {
        e.preventDefault();
    

    props.onTaskCreate(name);
    setName('');
    }


return (
<div>
    <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
            <input
            value={name}
            onChange={(e) => {setName(e.target.value);}}
            className="form-control"
            placeholder="Enter The Task"
            ></input>
            <button className="btn btn-outline-primary" type="Submit" >
                +
            </button>
        </div>
    </form>
</div>
);

}

