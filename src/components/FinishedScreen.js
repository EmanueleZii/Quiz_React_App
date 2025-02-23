//import { useQuiz } from "../contexts/QuizContext";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch}) {
  //const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  return (
    <>
      <p className="result">
         You scored is <strong>{points}</strong> out of
        {maxPossiblePoints} 
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
       <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button> 
    </>
  );
}

export default FinishScreen;
