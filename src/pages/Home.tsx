import React from 'react';
import { IonButton, IonContent, IonPage, IonCardContent, IonNavLink, IonTitle, IonCardTitle, IonCard, IonCardHeader } from '@ionic/react';
import { Button } from 'antd';
import Give from '../assets/images/give.png';
import Mat from '../assets/images/material.png';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const handleNavigate = () => {
    // Navigate to the SecondPage component
    history.push('/devotion');
  };
  
  return (
    <>
     <IonPage>
      <IonContent>
       <div className="rhapsody">
        <p className='title'>Teevo</p>
        <p>13th - November - 2023</p>
        <h3>The Power of the Gospel in the power of his might</h3>
        <IonButton onClick={handleNavigate}  routerDirection="forward">Read</IonButton>

       </div>

       <div className="home-container">
          <IonCard className='card'>
              <IonCardHeader className='card-title'>
                <IonCardTitle>Daily Confession</IonCardTitle>
              </IonCardHeader>

              <IonCardContent style={{textAlign: 'justify'}}>
              My faith is producing results; I walk in divine health, victory, and dominion by the power of the Spirit of God. I am who God says I am and as a citizen of Zion, I shall never be sick. The life of Christ is at work in every fiber of my being, every bone of my body, and every cell of my blood. My faith is the victory that overcomes the world. I am born, not of corruptible seed, but of the incorruptible and ‘uninfectable’ seed – the Word of God which lives and abides forever. I am immune to sickness and my body neutralizes anything that 
              is contrary to the Word of God, in the Name of Jesus. Amen!
              </IonCardContent>
            </IonCard>

          <div className="row">
            <IonCard  className='card'>
              <img src={Give} alt="wow" />
              <IonCardHeader>
                <IonCardTitle className='card-title'>Give</IonCardTitle>
              </IonCardHeader>

              {/* <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent> */}
            </IonCard>

            <IonCard className='card'>
            <img src={Mat} alt="wow" />
              <IonCardHeader>
                <IonCardTitle className='card-title'>Materials</IonCardTitle>
              </IonCardHeader>

              {/* <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent> */}
            </IonCard>
          </div>


          <IonCard className='card gab-card'>
          <IonCardHeader className='card-title'>
            <IonCardTitle className='card-title'>Gabriel</IonCardTitle>
          </IonCardHeader>

          <IonCardContent className='gab-content'>Listen, Create and Share Godly podcast with everyone</IonCardContent>
        </IonCard>
       </div>


      </IonContent>
     </IonPage>
    </>
  );
}
export default Home;