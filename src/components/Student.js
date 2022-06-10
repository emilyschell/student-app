import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {
    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresent: !props.isPresent,
        };
        props.onUpdate(updatedStudent);
    };

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={onAttendanceButtonClick}>
                Toggle if {props.name} is present
            </button>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
    id: PropTypes.number.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default Student;
