import React from 'react';
import { Checkmark } from './icons';
import Slider from './slider';
import RadioToggle from './radio-toggle';
import styles from '../style/interactiveCpnt.module.css';
import icon from '../style/icons.module.css';
import font from '../style/typography.module.css';
import { pricing } from './data';

function CardFooter() {
  return (
    <div className="card-footer">
      <ul className="list" role="list">
        <li>
          <Checkmark className={icon.checkmark} aria-hidden="true" />
          Unlimited ebsite
        </li>
        <li>
          <Checkmark className={icon.checkmark} aria-hidden="true" />
          100% data ownership
        </li>
        <li>
          <Checkmark className={icon.checkmark} aria-hidden="true" />
          Email reports
        </li>
      </ul>
      <button className={styles.cta}> Start my trial</button>
    </div>
  );
}
class CardTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: pricing[2].price,
      views: `${pricing[2].viewsValue}${pricing[2].viewsSymbol}`,
    };
  }
  handlePriceChange(price) {
    this.setState({
      price,
    });
  }
  handleViewsChange(views) {
    this.setState({
      views,
    });
  }
  render() {
    return (
      <div className="card-content">
        <div className="card-content__top">
          <output htmlFor="price">
            <span className={font.cardTitle}>{this.state.views} pageviews</span>
          </output>
          <output htmlFor="price billing-frequency" className="dskt-2rd-Elem">
            <span
              className={font.billingTag}
            >{`$ ${this.state.price}.00`}</span>
            <span className={font.smallText}> / month</span>
          </output>
          <Slider
            onPriceChange={this.handlePriceChange.bind(this)}
            onViewsChange={this.handleViewsChange.bind(this)}
          />
        </div>
        <div className="card-content__toggleButton">
          <RadioToggle onToggle={this.handlePriceChange.bind(this)} />
          <span className={styles.discountTag} aria-label="yearly discount">
            25% <span className="dskt-only">discount</span>
          </span>
        </div>
      </div>
    );
  }
}
function Card() {
  return (
    <div className="card">
      <h2 className="sr-only">Pricing card </h2>
      <CardTop />
      <CardFooter />
    </div>
  );
}
export default Card;
