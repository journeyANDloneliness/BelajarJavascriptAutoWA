import './App.css'
import * as React from 'react';
import { useState, useEffect } from 'react';

import Question from "./pilihan_ganda/Question"
import _ from "lodash"
import Editor from "./Editor"

import { useQuery, gql } from '@apollo/client';

const GET_SOAL = gql`
  query GetSoal {
    Soal{
      id
      pertanyaan
      jawaban1
      jawaban2
      jawaban3
      jawaban4
      jawaban5
      jawaban_benar
      type
      hints
      snippet
      level
      topic
    }
  }
`;


export default function App() {
  let [questions, setQuestions] = useState([])
  let [questionNow, setQuestionNow] = useState({})

  const { loading, error, data } = useQuery(GET_SOAL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 
  useEffect(()=>{
      setQuestions(vv=>{
        sampleQuestion(data)
        return data
      })
      
    
  },[data])

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