import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonPopover } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [openPopover] = useIonPopover(<>
  <IonContent className='ion-padding'>
    <IonText>Testing things...</IonText>
  </IonContent>
  </>)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={(_event: unknown) => {
              openPopover({
                event: _event as Event
              })
            }} size="large">Open</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
