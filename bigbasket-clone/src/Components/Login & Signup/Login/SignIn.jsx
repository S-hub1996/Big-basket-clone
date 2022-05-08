import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess } from "../../../Redux/Auth/auth.action";
import {
  userUpdateRequest,
  userUpdateSuccess,
} from "../../../Redux/User/user.actions";
import { SigninSection } from "../../Header & Footer/Header/HeaderElement";
import axios from "axios";

export const SignIn = ({ isSigning, setIsSigning }) => {
  const { data } = (state) => state.user;
  const dispatch = useDispatch();
  const [otp, setotp] = useState(false);
  const [otpValue, setotpValue] = useState("");
  const [currLoginWith, setCurrLoginWith] = useState(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleContinue = () => {
    setotp(true)
    console.log("otpppp3",otp)
  };

  const handleOTP = () => {
    dispatch(loginRequest());
    dispatch(loginSuccess("371f4b4c42c144a082aaf5e"));
    setIsSigning(!isSigning);
    setUserDetails({
      mobile: "",
      number: "",
    });
    return;
  };

  return (
    <SigninSection>
      <div className={isSigning ? "sign-in-show" : "sign-in-hide"}>
        <div className="form-container">
          <div
            className="close-modal"
            onClick={() => {
              setIsSigning(!isSigning);
              setUserDetails({ email: "", number: "", otp: "" });
            }}
          >
            <span></span>
            <span></span>
          </div>
          {!otp ? (
            <>
              <h6>LOGIN/SIGN UP</h6>
              <div>
                <input
                  type="text"
                  name={currLoginWith ? "number" : "email"}
                  placeholder={
                    currLoginWith
                      ? "Enter Mobile Number (10-digit)"
                      : "Enter Email Address"
                  }
                  value={currLoginWith ? userDetails.number : userDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="login-with-email"
                  onClick={() => {
                    setCurrLoginWith(!currLoginWith);
                    userDetails.number = "";
                    userDetails.email = "";
                  }}
                >
                  {currLoginWith
                    ? "Login with Email Address"
                    : "Login with Mobile Number"}
                </button>
                <button className="continue" onClick={handleContinue}>
                  Continue
                </button>
                <p>
                  By continuing, I accept TCP-bigbasket's
                  <b> Terms and Conditions</b> and <b>Privacy Policy</b>.
                </p>
              </div>
            </>
          ) : (
            <>
              <h6>Verify Mobile Number</h6>
              <div>
                <p className="otp">
                  Please check the OTP sent to your mobile number
                </p>
                <div>
                  <span>{userDetails.number}</span>
                  <button
                    onClick={() => {
                      setotp(false);
                      setotpValue("");
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otpValue}
                onChange={(e) => setotpValue(e.target.value)}
              />
              <button
                style={{ opacity: `${!(otpValue.length === 4) ? "0.6" : "1"}` }}
                className="continue"
                onClick={handleOTP}
              >
                Verify &amp; Continue
              </button>
            </>
          )}
        </div>
      </div>
    </SigninSection>
  );
};
