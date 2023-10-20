import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">I will make it fast</a></p>
   
    </div>
  );
};

export default ExploreContainer;
