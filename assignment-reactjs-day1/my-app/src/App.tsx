import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardIndex from './Components/CardIndex';
import { CardDeck } from 'react-bootstrap';
import { FoodList } from './Foodlist';




function App() {
  const list1: FoodList[] = [
    {
      name: '01 Seat',
      flag: true,
    },
    {
      name: 'Tea & coffee Breaks',
      flag: false,
    },
    {
      name: 'Wifi Available',
      flag: false,
    },
    {
      name: 'Exclusive Seatings',
      flag: false,
    }
  ];

  const list2: FoodList[] = [
    {
      name: '02 Seat',
      flag: true,
    },
    {
      name: 'Tea & Coffe Breaks',
      flag: true,
    },
    {
      name: 'Wifi Available',
      flag: false,
    },
    {
      name: 'Exclusive Seatings',
      flag: false,
    }
  ]

  const list3: FoodList[] = [
    {
      name: '04 Seat',
      flag: true,
    },
    {
      name: 'Tea & Coffe Breaks',
      flag: true,
    },
    {
      name: 'Wifi Available',
      flag: true,
    },
    {
      name: 'Exclusive Seatings',
      flag: true,
    }
  ]

  return (
    <div className='App'>
      <CardDeck className='cardfix'>
        <div>
          <CardIndex
            iconfont={"fas fa-bicycle"}
            text={'Basic'}
            price={100}
            desc={'Including all taxes'}
            list={list1}
          />
        </div>
        <div>
          <CardIndex
            iconfont={"fas fa-car"}
            text={'Standard'}
            price={200}
            desc={'Including all taxes'}
            list={list2}
          />
        </div>
        <div>
          <CardIndex
            iconfont={"fas fa-rocket"}
            text={'Premium'}
            price={300}
            desc={'Including all taxes'}
            list={list3}
          />
        </div>
      </CardDeck>
    </div>
  );
}

export default App;
