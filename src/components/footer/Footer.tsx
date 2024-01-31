import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="flex justify-center text-white bg-primary-600">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold mb-4">
            <Link to="/home" className="text-2xl font-bold flex items-center">
              <img src="Logo.png" className="h-12" alt="" />
              <h1>ZetaBlog</h1>
            </Link>
            <p className="text-center">©️ 2024</p>
          </p>
          <p className="text-lg">Acesse nossas redes sociais:</p>
          <div className="flex gap-4">
            <Link to={'https://www.linkedin.com/in/mdteixeira15'} target="_blank">
              <LinkedinLogo className="hover:brightness-75" size={48} weight="light" />
            </Link>
            <Link to={'https://www.instagram.com/mdteixeira.portfolio/'} target="_blank">
              <InstagramLogo className="hover:brightness-75" size={48} weight="light" />
            </Link>
            <Link to={'https://github.com/mdteixeira'} target="_blank">
              <GithubLogo className="hover:brightness-75" size={48} weight="light" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
