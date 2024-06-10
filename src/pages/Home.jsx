import { ButtonContainer, CardContainer, IconContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
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
  )
}
