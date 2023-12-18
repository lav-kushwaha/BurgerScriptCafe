import React from "react";
import { CDN_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import {useState} from 'react'
import Alert from './Alert'

const ItemList = ({ items }) => {

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const handleAddItems = (item)=>{
     dispatch(addItem(item))
     setShowAlert(true);
     setTimeout(()=>{
        setShowAlert(false)
     },1000)
  }

  //removed items.
  const handleRemoveItems = ()=>{
      dispatch(removeItem())

  }


  return (
    <div className="items-description">
      {showAlert && <Alert message="Item Added Successful" />}
      {items.map((item) => (
        <div className="Item-list-data" key={item.card.info.id}>
          <div className="list-image">
            <img
              src={`${CDN_LINK}/${item.card.info.imageId}`}
              alt="Item-list-Image"
            />
            <button className="add-items" onClick={()=>handleAddItems(item)}>Add+</button>
            <button className="remove-items" onClick={()=>handleRemoveItems(item)}>Remove Item</button>
          </div>
          <div className="Item-list">
            <span><strong>{item.card.info.name}</strong></span>
            <span><strong>₹{item.card.info.price / 100 || item.card.info.defaultPrice/100}</strong></span>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
