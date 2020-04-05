import React from 'react';
import Preloader from "../../common/preloader/Preloader";

class ProfileStatus extends React.Component {
    // if (!props.profile) {
    //     return <Preloader/>
    // }

    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {this.setState({editMode: true})};
    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
          this.setState({status: e.currentTarget.value});
    };

    // onChangeEditMode = () => {
    //     this.setState({editMode: !this.state.editMode})
    // };

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Write your status here.'}</span>
                        </div>
                        : <div>
                            <input onChange={this.onStatusChange} autoFocus={true}
                                   onBlur={this.deActivateEditMode} value={this.state.status}
                                   maxLength='150'
                            />
                        </div>
                }
            </div>
        )
    };
}


export default ProfileStatus;