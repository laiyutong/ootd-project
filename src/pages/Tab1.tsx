import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Home from '../components/Home';
// import './Home.css

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>首頁</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">首頁</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Home name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
