import React from 'react';
import { connect } from 'react-redux';
import calorieData from '../../store/reducers';

class UserSettings extends React.Component {
    renderUserData() {

        const dataArray = Object.keys(this.props.calorieData);
        return dataArray.map((el) => {
            return (
                <div className="item" key={el}>
                    <div className="content">
                        {el}: {this.props.calorieData[el]}
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderUserData()}
            </div>
        );
    }
};

const mapStateToState = state => {
    return {
        calorieData: state.calorieData,
        form: state.form
    };
};

export default connect(mapStateToState)(UserSettings);