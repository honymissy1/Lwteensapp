import React from 'react';
import { IonButton, IonPage, IonModal, IonContent, IonLabel, IonDatetime } from '@ionic/react';
import Image from '../assets/images/todopics.svg';
import './style.css'
import { Dialog } from '@capacitor/dialog';
import { Button } from 'antd';
import AddTodo from '../components/AddTodo';


function Tracker() {
    return (
        <IonPage>
            <div id="container">

                <div className='img-container'>
                   <img src={Image} alt="" />
                </div>

                <div className='content'>
                  <button id="open-modal" className='task-btn'>+ Add Task</button>
                </div>

             

                <IonModal
                    trigger="open-modal"
                    initialBreakpoint={0.25}
                    breakpoints={[0, 0.25]}
                    handleBehavior="cycle"
                    >
                    <IonContent className="ion-padding">
                        <div className="ion-margin-top">
                          <AddTodo />
                        </div>
                    </IonContent>
                </IonModal>
            
            </div>
        </IonPage>
      );
}
export default Tracker;