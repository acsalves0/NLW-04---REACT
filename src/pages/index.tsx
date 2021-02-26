import Head from 'next/head';
import {GetServerSideProps} from 'next/'

// import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;

}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience= {props.currentExperience}
      challengesCompleted= {props.challengesCompleted}> 

    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

     <ExperienceBar/>

    <CountdownProvider>
     <section>
       <div>
         <Profile/>
         <CompletedChallenges/>
         <Countdown/>
       </div>
       <div>
         <ChallengeBox/>
       </div>
     </section>
     </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies

  return{ 
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
// Se for usar esse mudar tbm o que esta comentado la no ChallengesContext
/** export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  console.log(currentExperience)

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}*/