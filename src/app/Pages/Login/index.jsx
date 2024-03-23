import { Logo } from '../../components/Logo/Logo'
import style from './style.module.css'


export const LoginPage = () => {
    return (
        <section className={style.login}>
            <Logo useBlack={true}/>
            <h1>Login Page</h1>
        </section>
    )
}