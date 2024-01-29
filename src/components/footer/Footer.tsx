import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

function Footer() {
  return (
    <>
      <div className="flex justify-center text-white bg-primary-600">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog pessoal Generation | Copyright: </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            <LinkedinLogo className="hover:brightness-75" size={48} weight="light" />
            <InstagramLogo className="hover:brightness-75" size={48} weight="light" />
            <FacebookLogo className="hover:brightness-75" size={48} weight="light" />
            <GithubLogo className="hover:brightness-75" size={48} weight="light" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
