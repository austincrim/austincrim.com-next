import React from 'react';
import Nav from '../components/Nav';

export default () => {
    return (
        <>
            <Nav />
            <div className="p-8 ml-8">
                <h3 className="mb-12 text-4xl font-sans">About Me</h3>
                
                <div className="flex flex-column justify-center">
                    <div className="p-6 mx-12 border border-blue-800 rounded shadow-md">
                        <h4 className="text-xl font-semibold font-sans">Career</h4> 
                        alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d
                    </div>
                    <div className="p-6 mx-12 border border-blue-800 rounded shadow-md">
                        <h4 className="text-xl font-semibold font-sans">Education</h4>
                        alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d 
                    </div>
                    <div className="p-6 mx-12 border border-blue-800 rounded shadow-md">
                    <h4 className="text-xl font-semibold font-sans">Personal</h4>
                        alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d 
                    </div>
                </div>
            </div>
        </>
    );
}
