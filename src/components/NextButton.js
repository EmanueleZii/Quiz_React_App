import { type } from "@testing-library/user-event/dist/type";

 function NextButton({ dispatch, answer, index, numQuestions }) {
    
  if(answer ===null) return null;
  //nextbutton
  if (index < numQuestions - 1) return (
    <button className="btn btn-ui" onClick={
        () => dispatch({type: "nextQuestion"})
    }>Next</button>
  )

  //lastbutton
  if (index === numQuestions - 1) return (
    <button className="btn btn-ui" onClick={
        () => dispatch({type: "finish"})
    }>Finish</button>
  )

}
export default NextButton;