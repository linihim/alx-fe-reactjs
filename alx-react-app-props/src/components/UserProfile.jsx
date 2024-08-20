import { useContext } from 'react'
import UserContext from '../components/UserContext'

const UserProfile = () => {
    const { name, email } = useContext(UserContext);

    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
}

export default UserProfile;