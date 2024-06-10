import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/ilustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true

  return (
    aparecerResultado === false ? 
    <CardContainer>
    <IconContainer>
      <img src={iconStarImg} alt="" />
    </IconContainer>

    <h1>Como foi o atendimento?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae soluta labore nostrum eaque quo minus iure libero, necessitatibus quam. Molestias quisquam harum pariatur quam quasi ad expedita deleniti perspiciatis.</p>

    <ButtonContainer>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </ButtonContainer>

    <button>Enviar</button>

    </CardContainer>
     
  ) : (
    <CardContainer>
      <img src={thankYouImg} alt="" />

      <ResultContainer>
        <p>Você selecinou 4 de 5</p>
      </ResultContainer>


      <h1>Obrigado</h1>

      <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContainer>
    

  )
}
