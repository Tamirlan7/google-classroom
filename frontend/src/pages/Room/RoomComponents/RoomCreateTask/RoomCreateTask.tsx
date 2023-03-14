import React from "react";
import './RoomCreateTask.css'
import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'
import Select from "../../../../UI/Select/Select";
import { IOption } from "../../../../types/types";
import ImportIcons from "../../../../components/ImportIcons/ImportIcons";
import ButtonSelect from "../../../../UI/ButtonSelect/ButtonSelect";
import Textarea from "../../../../UI/Textarea/Textarea";



const RoomCreateTask: React.FC = () => {
    const [isCreateForm, setIsCreateForm] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('')
    const theme_color = 'pink'
    const avatar = 'none'




    /*
        | ---- FUNCTIONS  ---- |
    */

    function openCreateForm() {
        setIsCreateForm(true);
    }

    function closeCreateForm() {
        setIsCreateForm(false)
    }




    /*
        | ---- UI ARRAYS  ---- |
    */

    const [options, setOptions] = React.useState<IOption[]>([
        {id: 1, theme_color: 'pink', title: 'Bamb'},
        {id: 2, theme_color: 'turquoise', title: 'Hamb'},
        {id: 3, theme_color: 'grey', title: 'Samb'},
    ])

    const usersOptions: IOption[] = [{
        id: 1,
        theme_color: 'turquoise',
        title: 'Все учащиеся',
    }]




    /* 
            INPUT   ||
                    \/
    */


    if ( !isCreateForm ) 
        return (
            <>
            <div className="room-content__input">


                <div 
                    className={`room-content__input-button color-${theme_color}-hover`}

                    onClick={() => openCreateForm()}
                >

                    <div className="input-button__avatar-block">
                        <div>
                            <img className="input-button__avatar-img" src={avatar} alt="avatar" />
                        </div>
                    </div>
                    
                    <div className={`input-button__text`}>
                        Обратитесь к курсу
                    </div>
                </div>


                <div className="room-content__input-repeat">
                    <figure className="input-repeat__icon">
                        <RepeatIcon />
                    </figure>
                </div>


            </div>
            </>
        )
    

    /* 
        CREATE FORM ||
                    \/
    */


    return (
        <div className="room-details__create-task">



            <form className="create-task__form">

                <div className="create-task__form-course">

                    <p className="create-task__form-course__text">Для кого</p>
                    <div className="create-task__form-course__selects">

                        <Select 
                            
                            options={options} 
                            setOptions={setOptions}
                            defaultOption={options[0]} 
                        />
                        <Select 
                            className="create-task__users-select"
                            setOptions={null}
                            options={usersOptions}
                            defaultOption={usersOptions[0]} 
                        />

                    </div>

                </div>

                <div className="create-task__form-text">

                    <Textarea 

                        placeholder="Обратитесь к курсу"
                        theme_color={theme_color} 
                    />

                </div>

            </form>




            <div className="create-task__submit-block">

                <div className="create-task__links">

                    <div className="create-task__links-inner">
                        <ImportIcons className={`fill-${theme_color} bg-${theme_color}-hover`} />
                    </div>

                </div>

                <div className="create-task__submit">

                    <div className="create-task__submit-cancel">

                        <span 
                            className="create-task__submit-cancel__text"
                            onClick={closeCreateForm}
                        >Отмена</span>
                    
                    </div>

                    <ButtonSelect 
                        withDeleting={false}
                        buttonText="Опубликовать" 
                        theme_color={theme_color} 
                    />
                </div>

            </div>





        </div>
    )
}

export default RoomCreateTask
