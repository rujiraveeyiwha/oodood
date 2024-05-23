import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

function FoodMarquee() {
  const foodEmojis =
    "🍕🍔🍟🌭🍿🥓🥞🍳🥗🍣🍤🍜🍲🍱🍛🍚🍙🍘🍢🍡🍧🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪";

  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>{foodEmojis}</span>
      </div>
    </div>
  );
}

export default FoodMarquee;
