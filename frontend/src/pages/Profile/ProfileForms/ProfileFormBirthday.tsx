import React, { useEffect } from "react";
import ProfileFormHeader from "./ProfileFormHeader";
import peopleImg from '../../../assets/images/people.png';
import lockImg from '../../../assets/images/lock.png';
import { useTypedSelector } from "../../../hooks/redux";
import { useDate } from "../../../hooks/useDate";
import { IProfile } from "../../../types/types";
import { connect } from "react-redux";
import { updateProfile } from "../../../actions/profile/action";
import { Link } from "react-router-dom";


interface ProfileFormBirthdayProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileFormBirthday: React.FC<ProfileFormBirthdayProps> = ({ updateProfile }) => {
    const currentBirthday = useTypedSelector(state => state.profile.profile.birthday)
    const [formattedDate, formattedDateObj, changeDate] = useDate('');

    console.log('ProfileFormBirthday render');

    useEffect(() => {
        if (currentBirthday)
            changeDate('all', currentBirthday)
    }, [currentBirthday])

    function updateBirthday(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateProfile({birthday: formattedDate})
    }

    return (
        <div className='field-page field__birthday-page'>
            <ProfileFormHeader title="Дата рождения" />
            <div className='field-page__content field-page__birthday-content'>
                <div className="inner-field__content inner-field-birthday__content inner-field-padding">
                    <div className="privacy-info">
                        <p>Ваша дата рождения может использоваться для защиты аккаунта и персонализации сервисов Google. Если этот аккаунт Google использует компания или организация, укажите дату рождения сотрудника, который им управляет. <span>Подробнее…</span></p>
                    </div>
                    <div className='field-form field__birthday-form'>
                        <div className="inner-field__birthday-form">
                            <div className="field-date-block">
                                <small>Обновите дату рождения</small>
                                <div className="field-date">
                                    <div className="day-block">
                                        <input 
                                            type="text" 
                                            name="day"
                                            className="day-input"
                                            placeholder="ДД"
                                            value={formattedDateObj.day}
                                            onChange={(e) => changeDate('day', e.target.value)}
                                        />
                                        <label className="day-label" htmlFor="day"><span>День</span></label>
                                    </div>
                                    <div className="month-block">
                                        <select name="month" className="month-select" onChange={(e) => changeDate('month', e.target.value)}>
                                            <option selected={formattedDateObj.month === '01'} value="01">Январь</option>
                                            <option selected={formattedDateObj.month === '02'} value="02">Февраль</option>
                                            <option selected={formattedDateObj.month === '03'} value="03">Март</option>
                                            <option selected={formattedDateObj.month === '04'} value="04">Апрель</option>
                                            <option selected={formattedDateObj.month === '05'} value="05">Май</option>
                                            <option selected={formattedDateObj.month === '06'} value="06">Июнь</option>
                                            <option selected={formattedDateObj.month === '07'} value="07">Июль</option>
                                            <option selected={formattedDateObj.month === '08'} value="08">Август</option>
                                            <option selected={formattedDateObj.month === '09'} value="09">Сентябрь</option>
                                            <option selected={formattedDateObj.month === '10'} value="10">Октябрь</option>
                                            <option selected={formattedDateObj.month === '11'} value="11">Ноябрь</option>
                                            <option selected={formattedDateObj.month === '12'} value="12">Декабрь</option>
                                        </select>
                                        <label htmlFor="month" className="month-label"><span>Месяц</span></label>
                                    </div>
                                    <div className="year-block">
                                        <input 
                                            type="text" 
                                            name="year"
                                            className="year-input"
                                            placeholder="ГГГГ"
                                            value={formattedDateObj.year}
                                            onChange={(e) => changeDate('year', e.target.value)}
                                        />
                                        <label className="year-label" htmlFor="year"><span>Год</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="field-privacy-block">
                                <h3>Укажите, кто может видеть вашу дату рождения</h3>
                                <div className="field-privacy-buttons">
                                    <button className="button-selected">
                                        <figure>
                                            <img src={lockImg} alt="lock" />
                                        </figure>
                                        <small>
                                            Только вы
                                        </small>
                                    </button>
                                    <button>
                                        <figure>
                                            <img src={peopleImg} alt="people" />
                                        </figure>
                                        <small>
                                            Все
                                        </small>
                                    </button>
                                </div>
                            </div>
                            <div className="field-save-block">
                                <p>Эта информация конфиденциальна. Ее видите только вы. <span>Подробнее…</span></p>
                                <form className="form-buttons" onSubmit={(e) => updateBirthday(e)}>
                                    <Link to={'/profile?cat=self-info'} className="cancel-button" role={'button'}>Отмена</Link>
                                    <button 
                                        type="submit" 
                                        className={
                                            formattedDateObj.day !== currentBirthday?.split('-')[2] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year ||
                                            formattedDateObj.month !== currentBirthday?.split('-')[1] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year ||
                                            formattedDateObj.year !== currentBirthday?.split('-')[0] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year 
                                            ? "submit-button submit-button-active" : "submit-button"
                                        } 
                                        disabled={
                                            formattedDateObj.day !== currentBirthday?.split('-')[2] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year ||
                                            formattedDateObj.month !== currentBirthday?.split('-')[1] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year ||
                                            formattedDateObj.year !== currentBirthday?.split('-')[0] && formattedDateObj.day && formattedDateObj.month && formattedDateObj.year ? false : true
                                        }
                                    >Сохранить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default connect(null, { updateProfile })(ProfileFormBirthday);
