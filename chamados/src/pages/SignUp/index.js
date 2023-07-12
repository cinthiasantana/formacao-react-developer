import './signUp.css';
import logo from "../../assets/logo.png";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';


export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(event){
        event.preventDefault();
        if(name !== '' && email !== '' && password !== ''){
            await signUp( email, password, name);
        }
    }

    return (
        <div className='container'>
        <div className='login'>
            <div className='login-area'>
                <img src={logo} alt='logo pagina de login' />
            </div>

            <form onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <input type='text' placeholder='Seu Nome' value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='email@email.com' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Sua senha' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>
                    {loadingAuth ? 'Carregando...' : 'Cadastrar'}
                </button>
                <Link to="/">Já possui uma conta? Faça login.</Link>
            </form>

        </div>

    </div>
    )
}