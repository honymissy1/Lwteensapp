import {IonFabButton, IonIcon, IonModal, IonFabList, IonHeader, IonToolbar, IonBackButton, IonButtons, IonFab, IonContent, IonPage, IonCardContent, IonNavLink, IonTitle, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonFooter } from '@ionic/react';
import './devotion.css';
import {  bulbOutline, sendOutline } from 'ionicons/icons';
import idea from '../assets/images/idea.gif'
import { Input } from 'antd';


const { TextArea } = Input;
function Devotion() {
  const handleIdea = () =>{
     console.log('woow');
     
  }
  return (
    <>
     <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab slot="fixed" vertical="bottom" horizontal="end" id="open-idea">
          <IonFabButton>
            <IonIcon icon={bulbOutline}></IonIcon>
          </IonFabButton>

        </IonFab>



           <IonCard  className='card' style={{margin: 0}}>
              <IonCardHeader>
                 <IonCardTitle>A Call To Action</IonCardTitle>
                 <IonCardSubtitle>19 October 2023</IonCardSubtitle>
              </IonCardHeader>
                 <br />
                 <IonCardContent>That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved (Romans 10:9).</IonCardContent>
            </IonCard>

            <IonCard  className='card'>
              <IonCardHeader>
              </IonCardHeader>

                  <IonCardContent>When we preach the message of salvation to sinners, we much give them the opportunity to act their faith and receive salvation. There must be a call to action. If we don’t give them an opportunity to act their faith on the message, the seed sown in their heart could be lost; Satan could steal it from their hearts (Mathew 13:18-19)</IonCardContent> 
                  <IonCardContent>The proof that the seed of God’s Word has taken root in someone’s heart is their response and action of faith. Until a person respond in faith, it can be said that they have not truly heard the Word. When the Word is truly heard, it produces faith within the individual.</IonCardContent>
                  <IonCardContent>Faith comes by hearing (Romans 10:17); and faith is the response of the human spirit to the Word of God. So the response is so important. It’s the same when we minister to the sick. Take what Paul did in Lystra as an example. A man who had been crippled since birth listened intently to Paul’s teachings. The Bible says Paul perceives that the man had faith to be healed. He locked eyes with him and then commanded, “Stand up on your feet!” The man jumped to his feet and walked, gloriously healed!</IonCardContent>
                  <IonCardContent>In ministering to people, be it the sinner, the sick, the oppressed or depressed, we must provide clear instructions for their faith to be activated. Don’t just preach the Word and leave them wondering what to do next; put then through and let them act their faith on the words they’ve received.</IonCardContent>
                  <IonCardContent>Even now, why reading this, if you’ve never been born again, turn to the “prayer of salvation” on the page 76; pray that prayer, mean it with all your heart and immediately, you’ll be saved, translated into the Kingdom of God. Hallelujah!</IonCardContent>

            </IonCard>

            <IonCard  className='card' >
              <IonCardHeader>
                 <IonCardTitle>Prayer</IonCardTitle>
              </IonCardHeader>
                 <IonCardContent>
                   Dear Father, your Word is life to me, and as I hear and receive your Word, I’m compelled to respond, because I’m a doer of the Word. My faith prevails as I walk in the consciousness of all that the death, burial, resurrection and ascension of Jesus Christ consummated for me, in Jesus’ Name. Amen.
                 </IonCardContent>
            </IonCard>

            <IonCard  className='card'>
              <IonCardHeader>
              <IonCardSubtitle>FURTHER STUDY</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                  James 1:22, James 2:17, Acts 14:8-10
                </IonCardContent>
            </IonCard>

           <IonCard  className='card'>
              <IonCardHeader>
              <IonCardSubtitle>1-YEAR BIBLE READING PLAN</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>
                1 Timothy 1:1-2 & Jeremiah 5-6
                </IonCardContent>
            </IonCard>

            <IonCard  className='card'>
              <IonCardHeader>
                <IonCardSubtitle>2-YEAR BIBLE READING PLAN</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>
                  John 6:41-51 & 2 Kings 5
                </IonCardContent>
            </IonCard>
      </IonContent>

               <IonModal
                    trigger="open-idea"
                    initialBreakpoint={0.75}
                    breakpoints={[0, 0.25, 0.75, 1]}
                    handleBehavior="cycle"
                    >
                    <IonContent className="ion-padding" style={{position: 'relative'}}>
                        <div className="ion-margin-top">
                          <div className="post-idea" style={{position: 'absolute', bottom: 0, display: 'flex'}}>
                          <TextArea
                                // value={value}
                                // onChange={(e) => setValue(e.target.value)}
                                placeholder="Controlled autosize"
                                autoSize={{
                                  minRows: 2,
                                  // maxRows: 5,
                                }}
                              />
                            <i><IonIcon icon={sendOutline}></IonIcon></i> 
                          </div>
                        </div>
                    </IonContent>
                </IonModal>

     </IonPage>
    </>
  );
}

export default Devotion;