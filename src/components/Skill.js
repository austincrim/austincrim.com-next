import React from "react";

const Skill = (props) => {
    return (
        <div>
            <div className="p-4 bg-gray-700 text-gray-200 shadow rounded">
                <h4 className="text-xl tracking-wider font-semibold">{props.title}</h4>
                <div className="text-gray-400">{props.children}</div>
            </div>
        </div>
    );
};

export default Skill;