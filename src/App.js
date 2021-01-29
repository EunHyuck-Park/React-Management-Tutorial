import React, {Component} from 'react';
import './App.css';
import Customer from './component/Customer';

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '또또',
  'birthday': '2001001',
  'gender': '남자',
  'job': '공돌이'
  },
  {
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '여또또',
  'birthday': '2001002',
  'gender': '여자',
  'job': '문과생'
  },
  {
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '왕또또',
  'birthday': '2000901',
  'gender': '남자',
  'job': '프로그래머'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(cvalue => {
            return (
              <Customer
                key={cvalue.id}
                id={cvalue.id}
                image={cvalue.image}
                name={cvalue.name}
                birthday={cvalue.birthday}
                gender={cvalue.gender}
                job={cvalue.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
