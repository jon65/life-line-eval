import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './People.css';
// import User from './components/users/User';
import Card from './UI/Card';
import User from './users/User';

const People = () => {
  //init state
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/owners").then((response) => {
 
      setUsers(response.data.owners);
    });
  }, []);

  const userHandler = () => {
    return <div>users.friend_id</div>
  }

  return (
    <div>
      <h1>People</h1>
      <Card>
        {users ? 
        users.map((owner) => (
        <User key={owner.id} owner={owner} />
        ))
       : 
        <div>No owners found</div>
      }
      </Card>
    </div>
  );
};

export default People;