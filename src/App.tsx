import './App.css'
import * as React from 'react';
import { useState, useEffect } from 'react';

import Question from "./pilihan_ganda/Question"
import _ from "lodash"
import Editor from "./Editor"
import {doc} from "love-utility"


export default function App() {
  let [questions, setQuestions] = useState([])
  let [questionNow, setQuestionNow] = useState({})
 
  useEffect(()=>{
    let sheet=doc.sheetByTitle.soal1
    sheet.getRows().then(v=>{
      setQuestions(vv=>{
        sampleQuestion(v)
        return v
      })
      
    })
    
  },[])

  function sampleQuestion(questions){
    let ques = questions.filter(v=>!v.opened)
    let selected=_.sample(ques)
    selected.opened = true
    setQuestions({...questions})
    setQuestionNow(selected)
  }
  return (
    <main>
      <Question {...{level:1, topic:"abc", question:"hellow?",
       choices:[1,2,3], answer:2, hint:"helllo it shint" }}
      level={questionNow.level} topic={questionNow.topic} question={questionNow.pertanyaan}/>
       
    </main>
  )
}