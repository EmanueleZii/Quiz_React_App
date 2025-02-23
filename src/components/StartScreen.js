
export default function StartScreen({numQuestions, dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz App</h2>
        <p className="textP">Start the quiz with {numQuestions} questions by clicking the button below</p>
        <button className="btn btn-ui" 
        onClick={ () => dispatch({ type: "start" })}>
            Start Now!</button>
    </div>
  )
}
