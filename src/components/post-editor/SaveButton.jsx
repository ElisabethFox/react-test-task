import Button from 'react-bootstrap/Button';
import useSaving from '../../hooks/useSaving';

const SaveButton = () => {
    return (
        <Button variant="primary" onClick={useSaving()}>Save</Button>
    );
}
 
export default SaveButton;