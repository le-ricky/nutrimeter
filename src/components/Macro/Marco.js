import React from 'react';

const Macro = () => {
    return (
        <div>
        <div className='ui segment'>Daily Caloric Intake</div>
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <span>Protein</span>
                    <span>180</span>
                </div>
                <div className="ui segment">
                    <span>Carbs</span>
                    <span>180</span>
                </div>
                <div className="ui segment">
                    <span>Fats</span>
                    <span>180</span>
                </div>
            </div>
        </div>

    );
}

export default Macro;