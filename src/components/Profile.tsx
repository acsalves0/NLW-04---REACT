import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/acsalves0.png" alt="Acsa Alves"/>
            {/* <img src="https://avatars.githubusercontent.com/u/70059729?v=4" alt="Acsa Alves"/> */}
            <div>
                <strong>Acsa Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}