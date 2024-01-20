import { useState } from "react";

import { Geolocation } from "@capacitor/geolocation";
import {
  IonApp,
  IonButton,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [loader, setLoader] = useState(false)
  const testingCheckPermissions = async (): Promise<void> => {
    try {
      setLoader(true)
      const checkPermission = await Geolocation.getCurrentPosition();
      console.log({ checkPermission });
      setLoader(false)
    } catch (error) {
      console.log(error);
      setLoader(false) 
    }
  };
  
  return (
    <IonApp>
      <IonButton onClick={() => {void testingCheckPermissions()}} disabled={loader}>click</IonButton>
    </IonApp>
  );
};

export default App;
