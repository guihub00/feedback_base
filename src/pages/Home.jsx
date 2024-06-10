import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";
import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/ilustration-thank-you.svg"

export function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote, setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event) {
    const feedback = Number(event.target.innerText)

    setFeedbackNote(feedback)

  }

  function handleSubmit() {
    if (feedbackNote === 0) return

    setMostrarResultado(true)
  }

  return (
    mostrarResultado === false ? 
    <CardContainer>
    <IconContainer>
      <img src={iconStarImg} alt="" />
    </IconContainer>

    <h1>Como foi o atendimento?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae soluta labore nostrum eaque quo minus iure libero, necessitatibus quam. Molestias quisquam harum pariatur quam quasi ad expedita deleniti perspiciatis.</p>

    <ButtonContainer>
      <button onClick={handleFeedbackButtonClick}>1</button>
      <button  onClick={handleFeedbackButtonClick}>2</button>
      <button  onClick={handleFeedbackButtonClick}>3</button>
      <button  onClick={handleFeedbackButtonClick}>4</button>
      <button  onClick={handleFeedbackButtonClick}>5</button>
    </ButtonContainer>

    <button onClick={handleSubmit}>Enviar</button>

    </CardContainer>
     
  ) : (
    <CardContainer>
    <img src={thankYouImg} alt="" />

     <ResultContainer>
        <p>Você selecinou {feedbackNote} de 5</p>
      </ResultContainer>


      <h1>Obrigado</h1>

      <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContainer>
    

  )
}