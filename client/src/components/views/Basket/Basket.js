import React from "react";
import clsx from "clsx";
import styles from "./Basket.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    if (this.state.clicks > 1) {
      this.setState({ clicks: this.state.clicks - 1 });
    } else {
      this.setState({ clicks: 1 });
    }
  };

  render() {
    const { className, orders } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <div className={styles.cartContentTitle}>
              <i className={"far fa-gem"}></i> Complete your order{" "}
              <i className={"far fa-gem"}></i>
            </div>
            <form className={styles.cartOrder}>
              <ul className={styles.orderedMinerals}>
                <li>
                  <div className={styles.orderedItems}>
                    <b>ORDERED ITEMS</b>
                  </div>
                  <div className={styles.amountAll}>
                    <b>AMOUNT</b>
                  </div>
                  <div className={styles.price}>
                    <b>PRICE OF 1 ITEM</b>
                  </div>
                  <div className={styles.comment}>
                    <b>COMMENT YOUR ORDER (size etc.)</b>
                  </div>
                  <div className={styles.icons}></div>
                </li>
                <li>
                  <div className={styles.orderedItems}>{orders.orderedItems}</div>
                  <div className={styles.amountAll}>
                    <div className={styles.plusAndMinus}>
                      <button
                        onClick={this.DecreaseItem}
                        className={styles.minus}
                      >
                        -
                      </button>
                      <div className={styles.amount}>{this.state.clicks}</div>
                      <button
                        onClick={this.IncrementItem}
                        className={styles.plus}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.price}>xxx</div>
                  <div className={styles.comment}>
                    <form>
                      <input type="text" name="name" />
                    </form>
                  </div>
                  <div className={styles.icons}>
                    <i className={"fas fa-trash-alt"}></i>
                  </div>
                </li>
              </ul>
              <div className={styles.line}></div>
              <ul className={styles.cartOrderPrice}>
                <li className={styles.cartOrderSubtotal}>
                  <span className={styles.cartOrderPriceName}>Subtotal:</span>
                  <span className={styles.cartOrderPriceSum}>
                    $<strong>0</strong>
                  </span>
                </li>
                <li className={styles.cartOrderDelivery}>
                  <span className={styles.cartOrderPriceName}>Delivery:</span>
                  <span className={styles.cartOrderPriceSum}>$20</span>
                </li>
                <li className={styles.cartOrderTotal}>
                  <span className={styles.cartOrderPriceName}>
                    <strong>Total:</strong>
                  </span>
                  <span className={styles.cartOrderPriceSum}>
                    $<strong>0</strong>
                  </span>
                </li>
              </ul>
              <Link to={"/myOrder"} className={styles.clickToContinue}>
                Click &nbsp;to &nbsp;continue
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Basket.propTypes = {
  className: PropTypes.any,
  orders: PropTypes.any,
};

export default Basket;
