import React, { useState, useEffect } from 'react';
import './InterviewChat.css';
import axios from 'axios'
const InterviewChat = () => {
  const [questions,setQuestions] = useState([]);

  const [call,setCall] = useState(false)

const [que,setQue]=useState([])

// useEffect(()=>{
//     if(questions.length===0){

//     }
//     else{
        
//     }
// },[que])

async function getQuestions(){
    await axios.post("http://172.17.15.233:5001/user/getQuestions", {
        difficulty: 1,
        job_id: 1,
        js_id: 4
    })
    .then((response) =>{
        console.log(typeof response.data ,response.data,"11111111111111")
        let temp =[]
        for(let i = 0; i < Object.keys(response.data).length;i++){
          
            let payload ={id:i,question:response.data[i+1]}
            console.log(payload,"payload")
            temp.push(payload)
            
        }
      setQue(temp)
      console.log(temp,"temp array ")
        setCall(!call)
           setTimeout(() => {
             console.log(que,"questions")
           }, 2000);

    })
    .catch(function (error) {
        console.log(error);
    });
    console.log(que)
}
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState('');
  const [timer, setTimer] = useState(60); // Allocate 60 seconds for each question

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      submitResponse();
    }
  }, [timer]);

  const submitResponse = () => {
    console.log(responses)
    setResponses([...responses, currentResponse]);
    setCurrentResponse('');
    setTimer(60); // Reset timer for the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Interview finished:', responses);
      // Add logic to handle the end of the interview
    }
  };

  return (
    <div className="container">
      <h2>Interview Chat</h2>
      <div className="chat-box">
        {questions.slice(0, currentQuestionIndex + 1).map((question, index) => (
          <div key={index} className="message">
            <div className="question">Q{index + 1}: {question}</div>
            {responses[index] && (
              <div className="response">A: {responses[index]}</div>
            )}
          </div>
        ))}
      </div>
      {!call?<button className='bg-gray-300 p-2' onClick={()=>{getQuestions()}}>Start Interview</button>:
      <div>
      {currentQuestionIndex < questions.length && (
        <div className="textarea-container">
          <div className="question"><strong>Current Question:</strong> {questions[currentQuestionIndex]}</div>
          <textarea
            rows="4"
            cols="16"
            value={currentResponse}
            onChange={(e) => setCurrentResponse(e.target.value)}
            placeholder="Type your response here..."
          ></textarea>
          <div className="buttons">
            <button onClick={submitResponse} disabled={!currentResponse.trim()}>Submit Response</button>
            <span className="timer">Time left: {timer} seconds</span>
          </div>
        </div>
      )}
       </div>}
      {currentQuestionIndex >= questions.length && (
        <div>
          <h3>Thank you for your responses!</h3>
          {/* You can add additional UI or logic here for submission */}
        </div>
      )}
      
      {que.map(e=>{
       return <div>{e.question}</div>
      })}
    </div>
  );
};

export default InterviewChat;