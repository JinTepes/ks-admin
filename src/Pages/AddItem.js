import { useState, useEffect } from 'react';

import React from 'react';
import AddItemStyle from '../Layouts/AddItemStyle.module.css';

import ItemMapping from '../Components/ItemMapping';
import DropdownBoxMap from '../Components/DropdownBoxMap';

function AddItemPage({ theAdmin }) {
  //info
  const [user, setUser] = useState('');
  const [unseal, setUnseal] = useState(false);
  const [reason, setReason] = useState('');
  const [otherStaff, setotherStaff] = useState('Just Me');
  const [saveIform, setSaveIform] = useState(false);
  const [iDuration, setiDuration] = useState('');
  //confirming added stuff
  const confirmData = () => {
    console.log('Account Name: ', user);
    console.log('Items: ', items);
    console.log('Other Staff: ', otherStaff);
    console.log('Reason: ', reason);
    console.log('Unseal? : ', unseal);
    console.log('Save?: ', saveIform);
    console.log('Admin User: ', theAdmin);
    console.log('Duration: ', iDuration);
  };
  //adding an item
  const [sItem, setsItem] = useState('');
  const addItemCard = (theItem) => {
    //creating UID
    //const cid = Math.floor(Math.random() * 500) + 1;
    //creating added item object
    const itemName = theItem; //to follow the naming convention on the array
    const newItem = { itemName };
    setItems([...items, newItem]);
    //console.log(oItems);
    //console.log(items);
  };
  //deleting an item
  const deleteItemCard = (cid) => {
    //console.log(sItem);
    setItems(items.filter((item) => item.itemName !== cid));
    //console.log('deleted',cid, items);
  };

  //added item informations
  const [items, setItems] = useState([]);
  //adding item options
  const [oItems, setoItems] = useState([]);

  //populating the combobox for items
  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setoItems(itemsFromServer);
    };

    getItems();
    //console.log(oItems);
  }, []);

  //fetching the data
  const fetchItems = async () => {
    const response = await fetch('http://localhost:5000/ksItems');
    const data = await response.json();
    //console.log(data);
    return data;
  };

  return (
    <div className={AddItemStyle.centerParent}>
      <div className={AddItemStyle.holder}>
        <h2>Add Items to Player Account</h2>
        <div className={AddItemStyle.AccInfo}>
          <label htmlFor='AccountName'>Account Name:</label>
          <input
            type='text'
            id='AccountName'
            name='AccountName'
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className={AddItemStyle.itemDivisionParent}>
          <div className={AddItemStyle.itemInfoLeft}>
            <form>
              <div className={AddItemStyle.dFlexdirCol}>
                <div>
                  <label htmlFor='ItemName'>Item Name:</label>
                  <select
                    name='ItemName'
                    id='ItemName'
                    onClick={(e) => setsItem(e.target.value)}
                  >
                    <DropdownBoxMap oItems={oItems} />
                  </select>
                </div>

                <label htmlFor='Duration'>
                  Duration (Days): [0 - Permanent]
                </label>
                <input
                  type='text'
                  id='Duration'
                  name='Duration'
                  onChange={(e) => setiDuration(e.target.value)}
                />
              </div>
              <div className={AddItemStyle.btnHolder}>
                <input
                  type='button'
                  value='Add'
                  onClick={() => addItemCard(sItem)}
                />
              </div>
            </form>
          </div>
          <div className={AddItemStyle.verticalLign}>{/* Vertical Line */}</div>
          <div className={AddItemStyle.itemCardsContainer}>
            <ItemMapping onDelete={deleteItemCard} Items={items} duration={iDuration} />
            {/* container for items */}
          </div>
        </div>

        <div className={AddItemStyle.misc1}>
          <form>
            <label htmlFor='Reason'>Reason for Adding:</label>
            <input
              type='text'
              id='Reason'
              name='Reason'
              onChange={(e) => setReason(e.target.value)}
            />
            <label htmlFor='OtherStaff'>
              Other Staff In-charge: [Leave empty if only you.]
            </label>
            <input
              type='text'
              id='OtherStaff'
              name='OtherStaff'
              onChange={(e) => setotherStaff(e.target.value)}
            />
          </form>
        </div>
        <div className={AddItemStyle.misc2}>
          <form>
            <div>
              <input
                type='checkbox'
                id='rautounseal'
                name='rautounseal'
                onChange={(e) => setUnseal(e.target.checked)}
              />
              <label htmlFor='autounseal'>
                Automatically Unseal After Adding
              </label>
            </div>
            <div>
              <input
                type='checkbox'
                id='SaveFormInput'
                name='SaveFormInput'
                onChange={(e) => setSaveIform(e.target.checked)}
              />
              <label htmlFor='SaveFormInput'>Save This Form Input</label>
            </div>
          </form>
        </div>
        <div className={AddItemStyle.misc3}>
          <div onClick={confirmData}>Confirm</div>
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
