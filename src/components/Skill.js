import React from "react";

const Skill = (props) => {
    return (
        <div>
            <div className="p-4 bg-gray-300 font-semibold text-gray-800 shadow rounded">
                <img style={{height: '100px'}} className="mb-6 mx-auto" src={props.image} />
                <h4 className="text-xl tracking-wider">{props.title}</h4>
                <div className="text-gray-600">{props.children}</div>
            </div>
        </div>
    );
};

export default Skill;