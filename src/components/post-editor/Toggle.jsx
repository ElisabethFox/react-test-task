import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Toggle = ({ title }) => {
    return (
    <ToggleButtonGroup name="toggle" type="radio" variant="primary">

        <ToggleButton value={false}>
        </ToggleButton>

        <ToggleButton value={true}>
        </ToggleButton>

        <p>{title}</p>
    </ToggleButtonGroup>
    );
}
 
export default Toggle;