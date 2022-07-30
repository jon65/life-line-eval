import React, { useState, useEffect } from "react";
// import './User.css';
import Modal from '../UI/Modal';
const User = (props) => {
    let friendlist = <h3>No friends found</h3>
    let petlist = <h3>No pets found</h3>


    if (props.owner.friends_id) {
        friendlist = props.owner.friends_id.map((friend) => (
              <Modal className={friend.id}>
                <p>{friend.user_name}</p>
              </Modal>
            ))
        };

    if (props.owner.pet_id) {
        petlist = props.owner.pet_id.map((pet) => (
              <Modal className={pet.id}>
                <h3>{pet.pet_name}</h3>
              </Modal>
            ))
    };
    
    return (
      <div id={props.owner.id} className="">
        <h2>{props.owner.user_name}</h2>
        <div>
        {friendlist}
        </div>
        <div>
            {petlist}
        </div>
      </div>
    );
}

export default User;
