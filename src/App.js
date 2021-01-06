import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let cashUnits = [0, 0, 0, 0, 0, 0, 0];
  const [result, setResult] = useState("");
  const [cashArray, setcashArray] = useState(
    cashUnits.map((item) => <li>{item}</li>)
  );
  function billAmt() {
    let bill = parseInt(billAmount.value);
    let cashGiven = parseInt(totalCash.value);
    let returnedCash = 0;
    if (bill > cashGiven) {
      setResult("Not enough cash");
    } else if (bill === cashGiven) {
      setResult("Nothing to return");
    } else if (bill < cashGiven) {
      setResult("");
      returnedCash = cashGiven - bill;
      function divider(moneyNumber, index) {
        let cash = Math.floor(returnedCash / moneyNumber);
        returnedCash = returnedCash % moneyNumber;
        if (cash != 0) {
          cashUnits[index] = cash;
        } else {
          cashUnits[index] = 0;
        }
        return cashUnits;
      }
      divider(2000, 6);
      divider(500, 5);
      divider(100, 4);
      divider(20, 3);
      divider(10, 2);
      divider(5, 1);
      divider(1, 0);
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    }
  }
  return (
    <div className="App">
      <div id="information"></div>
      <div id="container">
        <span
          style={{
            position: "absolute",
            top: "15px",
            left: "30px",
            fontSize: "13px",
            letterSpacing: "1px",
            color: "#1e1e1e"
            // display: "block"
          }}
        >
          Bill Amount
        </span>
        <input
          type="number"
          id="billAmount"
          onChange={billAmt}
          placeholder="0"
        />
        <span
          style={{
            position: "absolute",
            top: "87px",
            left: "30px",
            fontSize: "13px",
            letterSpacing: "1px",
            color: "#1e1e1e"
            // display: "none"
          }}
        >
          Total cash recieved
        </span>
        <input
          type="number"
          id="totalCash"
          onChange={billAmt}
          placeholder="0"
        />
        <div
          style={{
            padding: "10px 40px 0",
            fontFamily: "roboto",
            width: "320px",
            fontWeight: "bolder",
            textAlign: "right"
          }}
        >
          {result}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            width: "350px",
            padding: "20px 0 0 0"
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              textAlign: "center",
              padding: "0 20px",
              fontWeight: "bold"
            }}
          >
            <li>₹1&nbsp;&nbsp;&nbsp;</li>
            <li>₹5&nbsp;&nbsp;&nbsp;</li>
            <li>₹10&nbsp;&nbsp;</li>
            <li>₹20&nbsp;&nbsp;</li>
            <li>₹100&nbsp;</li>
            <li>₹500&nbsp;</li>
            <li>₹2000</li>
          </ul>
          <ul></ul>
          <ul></ul>
          <ul
            style={{
              listStyleType: "none",
              padding: "0 20px"
            }}
          >
            {cashArray}
          </ul>
        </div>
      </div>
    </div>
  );
}
