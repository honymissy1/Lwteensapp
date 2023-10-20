import React from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';

function TapTv() {
  console.log('wait');
  
  return (
    <>
     <IonPage>
       <IonContent>
        <div className='vid-container'>
          <h1>Tap Tv</h1>
          <video></video>
        </div>
       </IonContent>
     </IonPage>
    </>
  );
}
export default TapTv;