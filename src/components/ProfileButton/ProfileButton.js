import './ProfileButton.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function ProfileButton() {
  return (
      <Link className="profile-button__link" to="/signup">
        <Button buttonText="Аккаунт" />
      </Link>
  )
}

export default ProfileButton;