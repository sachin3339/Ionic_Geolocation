import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import Geolocation from '../components/Geolocation'
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Covid19 Live Tracking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Covid19 Live Tracking</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Geolocation/>
        
      
      </IonContent>
    </IonPage>
  );
};

export default Home;
