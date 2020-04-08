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
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }

        console.log('componentDidUpdate')
    }

    onStatusChange = (e) => {
          this.setState({status: e.currentTarget.value});
    };


    render() {
        console.log('render')
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