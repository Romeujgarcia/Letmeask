import illustrationImg from '../assests/images/illustration.svg';
import logoImg from '../assests/images/logo.svg';
import googleIconImg from '../assests/images/google-icon.svg';
import {Button} from '../components/Button'


import '../stytes/auth.scss';
export function Home(){
    return(
        <div id="page-auth">
            <aside>
               <img src={illustrationImg} alt="Ilustração simbolizando pergunta e respostas"/>
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text"  placeholder="Digite o codigo da sala "/>
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}