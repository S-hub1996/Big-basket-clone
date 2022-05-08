import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styles from "./Address.module.css";
export const Address = () => {
  const state = useSelector((state) => state.CheckoutReducer.address);
  console.log(state,"address")
  const dispatch = useDispatch();
  const change=useSelector((state)=>state.CheckoutReducer.changeAddress)
  var [address,setAddress]=useState({})
  const handleAddress = (e) => {
    setAddress ({...address,[e.target.name]:e.target.value})
  console.log(address)
  }
  const handlesubmit = () => {
    console.log("naga")
    dispatch({
      type: "addressAd",
      payload:address
    })
    dispatch({
      type: "change",
      payload:false
    })
     dispatch({
      type: "deliveryoption",
      payload:true
    })

  }
  console.log("naga")
  


  return (
    <div>
      <div id={styles.addresscont}>
        <div id={styles.addressdiv}>
        <h2>Shipping Details</h2>
          <div id={styles.adgridone} className={styles.same}>
          <div>
            <label for="">Firstname</label>
            <input onChange={handleAddress} name="firstName" type="text" id={styles.firstname} />
          </div>
          <div>
            <label for="">Last Name</label>
            <input name="lastName" onChange={handleAddress} type="text" id={styles.Lastname} />
          </div>
          <div>
            <label for="">Email Addres</label>
            <input name="emailAddress" onChange={handleAddress} type="text" id={styles.emailadress} />
          </div>
        </div>
          <div id={styles.adgridtwo} className={styles.same}>
          <div>
            <label for="">Mobile Number</label>
              <input name="mobileNumber" onChange={handleAddress} type="text" id={styles.mobile} />
          </div>
          <div>
            <label for="">Pincode</label>
              <input name="pincode" onChange={handleAddress} type="text" id={styles.Pincode} />
          </div>
          <div>
            <label for="">City</label>
              <input name="city" onChange={handleAddress} type="text" id={styles.City} />
          </div>
        </div>
          <div id={styles.adgridthree} className={styles.same}>
          <div>
            <label for="">State</label>
            <select onChange={handleAddress} name="state" id={styles.state}>
              <option value="">Select state</option>
              <option value="andaman">Andaman &amp; Nicobar Islands</option>
              <option value="andhra pradesh">Andhra Pradesh</option>
              <option value="Arunachal pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh<">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu">Jammu &amp; Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim<">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div>
            <label for="">Flat / House No. / Floor / Building</label>
            <input name="Hno" onChange={handleAddress} type="text" id={styles.flat} />
          </div>
        </div>
          <div id={styles.adgridfour} class={styles.same}>
          <div>
            <label for="">Colony / Street / Locality</label>
              <input name="street" onChange={handleAddress} type="text" id={styles.street} />
          </div>
          <div>
            <label for="">Landmark (optional)</label>
              <input name="landMark" onChange={handleAddress} type="text" id={styles.landmark} />
          </div>
        </div>

         
          <button onClick={handlesubmit} className={styles.addAdress}>Add Address</button>
        </div>
        
      </div>
      </div>
  )
}
