import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './wallet.module.css'
import { BiHomeAlt } from 'react-icons/bi'
import {
  MdOutlineDashboard,
  MdOutlinePayment,
  MdAccountCircle,
} from 'react-icons/md'
import { RiFileListLine } from 'react-icons/ri'
import { GoLocation } from 'react-icons/go'
import { FiShoppingBag, FiGift } from 'react-icons/fi'
import { BiWallet } from 'react-icons/bi'
import { SiBigbasket } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import { Add} from './Reducer/Action'
import { useNavigate } from 'react-router-dom'


export const Wallet = () => {
  const state = useSelector((state) => state.WalletReducer)
  const [balance, setBalance] = useState(0);
  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAdd = () => {
    if (balance > 0) {
      
      navigate('/recharge')
    } else {
      alert('please Enter valid Amount')
    }
    dispatch(Add(balance))
  }
  const handleBalance = (e) => {
    var add = +e
    console.log(add, 'add amount')
    setBalance(add + balance)
  }
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date()
  const year = d.getFullYear()
  let month = months[d.getMonth()]
  console.log(month, 'month')
  return (
    <div className={styles.body}>
      <div className={styles.walletmaindiv}>
        <div className={styles.walletPath}>
          <div>
            <svg
              width="18"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.mr}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.242 15H12V9.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V15H3.75l.005-6.313 5.244-5.363 5.251 5.394L14.242 15zM7.5 15h3v-4.5h-3V15zm7.818-7.361L9.536 1.726a.772.772 0 00-1.072 0L2.68 7.64a1.556 1.556 0 00-.431 1.078V15c0 .827.635 1.5 1.416 1.5h10.667c.781 0 1.417-.673 1.417-1.5V8.718c0-.404-.158-.797-.432-1.08z"
                fill="#202020"
              ></path>
            </svg>
            <Link to="/">
              <h6>Home</h6>
            </Link>
          </div>
          <div>
            <h6>/</h6>
            <Link to="/myaccount">
              <h6>My Account</h6>
            </Link>
          </div>
          <div>
            <h6>/</h6>
            <h6>BbWallet</h6>
          </div>
        </div>
        <h4 className={styles.bbWallet}>bbWallet</h4>
        <div className={styles.maincontainer}>
          <div className={styles.iconsdiv}>
            <div>
              
              <MdOutlineDashboard onClick={()=>navigate("/")} size={20} /> 
              
             
              
              
            </div>
            <div>
              
              <RiFileListLine onClick={()=>navigate("/checkout")} size={20} />
              
              
            </div>
            <div>
              <GoLocation size={20} />
            </div>
            <div>
              <FiShoppingBag size={20} />
            </div>
            <div>
              <BiWallet color="white" size={22} />
            </div>
            <div>
              
              <SiBigbasket onClick={()=>navigate("/basket")} size={20} />
              
              
            </div>
            <div>
              <MdOutlinePayment size={25} />
            </div>
            <div>
              <FiGift size={20} />
            </div>
            <div>
              <MdAccountCircle size={20} />
            </div>
          </div>
          <div>
            <div className={styles.balancediv}>
              <div className={styles.balancedivOne}>
                <div className={styles.walletIcon}>
                  <BiWallet color="black" size={40} />
                </div>
                <div className={styles.balanceinfo}>
                  <p>Available balance</p>
                  <p>₹ {state.Balance}</p>
                </div>
              </div>
              <div className={styles.line}></div>
              <div>
                <div className={styles.balanceInp}>
                  <p>₹</p>
                  <input
                    onChange={(e) => setBalance(e.target.value)}
                    value={balance}
                    placeholder="Enter amount to add money to wallet"
                  />
                  <button onClick={handleAdd}>Add Money</button>
                </div>
                <div className={styles.amount}>
                  <div onClick={() => handleBalance(100)}>+ ₹100 </div>
                  <div onClick={() => handleBalance(500)}>+ ₹500 </div>
                  <div onClick={() => handleBalance(1000)}>+ ₹1000 </div>
                  <div onClick={() => handleBalance(2000)}>+ ₹2000 </div>
                </div>
              </div>
            </div>
            <p>
              Make hassle free payments on checkout, receive return on items
              credit & cashback. <Link to="/wallet">More about bbwallet</Link>
            </p>
            <p>Wallet Activity</p>
            <div className={styles.walletActivity}>
              <div className={styles.ActivityOne}>
                <h5 className={styles.activityTitle}>
                  Showing Wallet activity for {month} - {year}
                </h5>
                <select>
                  <option value={`${d.getMonth()}-${year}`}>
                    {month}-{year}
                  </option>
                  <option value={`${d.getMonth() - 1}-${year}`}>
                    {months[d.getMonth() - 1]}-{year}
                  </option>
                  <option value={`${d.getMonth() - 2}-${year}`}>
                    {months[d.getMonth() - 2]}-{year}
                  </option>
                </select>
              </div>
              <div className={styles.tableHead}>
                <div>
                  {' '}
                  <h6>Reason</h6>
                </div>
                <div>
                  <h6>credit/Debit Card</h6>
                  <h6>Starting Balance</h6>
                  <h6>Ending Balance</h6>
                  <h6>Date & Time</h6>
                </div>
              </div>
              <div>
                <img
                  src={
                    'https://www.bbassets.com/bb2assets/images/png/search-image.png'
                  }
                />
                <h3>No wallet activity available for the period!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
