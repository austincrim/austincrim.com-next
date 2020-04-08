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
                        <h4 className="text-xl font-semibold font-sans mb-2">
                            Career
                        </h4>
                        <p className="text-gray-700">
                            alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d
                        </p>
                    </div>
                    <div className="p-6 mx-12 border border-blue-800 rounded shadow-md">
                        <h4 className="text-xl font-semibold font-sans mb-2">
                            Education
                        </h4>
                        <p className="text-gray-700">
                            alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d
                        </p>
                    </div>
                    <div className="p-6 mx-12 border border-blue-800 rounded shadow-md">
                        <h4 className="text-xl font-semibold font-sans mb-2">
                            Personal
                        </h4>
                        <p className="text-gray-700">
                            alskdjflas;kdjfl;akjdfl jasdk f;lasd kflak dss d
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
