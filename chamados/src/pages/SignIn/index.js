import './signIn.css';
import logo from "../../assets/logo.png";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    async function handleSignIn(event) {
        event.preventDefault();
        if (email !== '' && password !== '') {
            await signIn(email, password);
        }
    }

    return (
        <div className='container'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='logo pagina de login' />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input type='text' placeholder='email@email.com' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Sua senha' value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>Acessar</button>
                    <Link to="/registro">Criar uma conta</Link>
                </form>

            </div>

        </div>
    )
}