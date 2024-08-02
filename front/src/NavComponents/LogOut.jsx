

    import { useHistory } from 'react-router-dom';

    const LogOut = () => {
        const history = useHistory();

        const handleLogout = async (e) => {
            e.preventDefault();
            history.push('/login');
        };

        return (
            <button onClick={handleLogout}>
                Log Out
            </button>
        );
    };

    export default LogOut;
    