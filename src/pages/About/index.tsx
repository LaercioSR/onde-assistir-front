import { AboutContainer } from "./styles";

export function About() {
  return (
    <AboutContainer>
      <div>
        <h1>SOBRE</h1>

        <p>
          O Onde Assistir foi desenvolvido por Laercio Rios como parte de um
          projeto acadêmico na disciplina de Programação para Redes da UEFS
          (Universidade Estadual de Feira de Santana), ministrada pelo professor
          João Rocha.
        </p>

        <p>
          Nosso objetivo principal ao criar este site foi aplicar os
          conhecimentos adquiridos ao longo do curso e colocar em prática as
          habilidades de desenvolvimento web. Desde a criação de um crawler, até
          uma API e final um front.
        </p>

        <p>
          Durante o desenvolvimento, tivemos a oportunidade de explorar
          tecnologias modernas e utilizar frameworks e bibliotecas populares
          para garantir um site eficiente e responsivo, como Node e React.
        </p>

        <p>
          Agradecemos pelo seu interesse em nosso projeto e esperamos que você
          desfrute da experiência de navegar pelo site. Sinta-se à vontade para
          explorar todos os recursos disponíveis e fornecer seu feedback valioso
          para nos ajudar a aprimorar ainda mais nosso trabalho.
        </p>

        <p>
          Você pode me encontrar no meu{" "}
          <a href="https://www.linkedin.com/in/laerciorios">LinkedIn</a> e
          acompanhar meus projetos no meu{" "}
          <a href="https://github.com/LaercioSR">GitHub</a>. Veja também mais
          detalhes da disciplina de Programação para Redes no{" "}
          <a href="https://sites.google.com/a/ecomp.uefs.br/joao/home/courses/exa844">
            site da disciplina
          </a>
        </p>
      </div>
    </AboutContainer>
  );
}
