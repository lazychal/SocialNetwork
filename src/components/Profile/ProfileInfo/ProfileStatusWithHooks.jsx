import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    // Hooks.
    // useState - используем стейт реакта. Здесь мы положили значение false как
    // первый элемент массива в реактовский стейт, и присвоили имя editMode.
    // Вторым элементом положили ф-ю, которая меняем значение editMode, и назвали setEditMode
    let [editMode, setEditMode] = useState(false);
    //Второй state, для статуса.
    let [status, setStatus] = useState(props.status);
    
    // Hook. Выполняет содержимое после отрисовки.
    // [props.status] - это зависимость. Чтобы useEffect синхронизировался с этим значением.
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

    //Вкл/выкл - режим редактирования
    const activateEditMode = () => {
        setEditMode(true)
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Write your status here.'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange}
                       value={status} maxLength='150'
                />
            </div>
            }
        </div>
    )
};


export default ProfileStatusWithHooks;