import React from 'react';
import { connect } from 'react-dom';
import Input from '../../components/UI/Input/Input';
import UserSettings from '../../components/UserSettings/UserSettings';
import Macros from '../../components/UI/Macros/MacroInput';

class Settings extends React.Component {
    render() {
        return (
            <div className="ui container">
                <UserSettings />
                <Input />
                <Macros />
            </div>
        );
    }
};

////mapStateToProps = state => {};

//mapDispatchToProps = dispatch => {};

export default Settings;