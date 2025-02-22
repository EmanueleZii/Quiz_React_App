
export default function StartScreen({numQuestions}) {
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz App</h2>
        <p className="textP">Start the quiz with {numQuestions} questions by clicking the button below</p>
        <button className="btn btn-ui">Start Now!</button>
    </div>
  )
}
