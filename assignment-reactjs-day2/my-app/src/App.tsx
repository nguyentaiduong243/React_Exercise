import './App.css';
import NotificationSettings from './Components/Notifi';
import { RatingBar } from './Components/rating-bar';

function App() {
  return (
    <div className="container">
      <div className="row">
        <NotificationSettings/>
      </div>
      <RatingBar max={10} ratingValue={5}/>
    </div>
  );
}

export default App;