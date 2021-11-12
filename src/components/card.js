import React from 'react';
import { Checkmark } from './icons';
import { SliderIcon } from './icons';
import styles from '../style/button.module.css';
import font from '../style/typography.module.css';
const pricing = [
  { viewsValue: 10, viewsSymbol: 'K', price: 8 },
  { viewsValue: 50, viewsSymbol: 'K', price: 12 },
  { viewsValue: 100, viewsSymbol: 'K', price: 16 },
  { viewsValue: 500, viewsSymbol: 'K', price: 24 },
  { viewsValue: 1, viewsSymbol: 'M', price: 36 },
];
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
function CardFooter() {
  return (
    <div className="card-footer">
      <ul className="list" role="list">
        <li>
          <Checkmark className="checkmarkIcon" aria-hidden="true" />
          Unlimited ebsite
        </li>
        <li>
          <Checkmark className="checkmarkIcon" aria-hidden="true" />
          100% data ownership
        </li>
        <li>
          <Checkmark className="checkmarkIcon" aria-hidden="true" />
          Email reports
        </li>
      </ul>
      <button className={styles.cta}> Start my trial</button>
    </div>
  );
}
class Slider extends React.Component {
  handleViewsChange(views) {
    this.props.onViewsChange(views);
  }
  handleValueChange(e) {
    const price = pricing[e.target.value].price;
    const views = `${pricing[e.target.value].viewsValue}${
      pricing[e.target.value].viewsSymbol
    }`;
    this.props.onPriceChange(price);
    this.handleViewsChange(views);
  }
  render() {
    return (
      <div className="card-content__slidebar">
        <label htmlFor="price">
          {/* className={styles.rangeWrapper} */}
          <span>
            <input
              id="price"
              type="range"
              min="0"
              max="4"
              onChange={this.handleValueChange.bind(this)}
            />
            {/* className={styles.thumb} */}
            <span className="sliderTrack"></span>
            <span className="sliderThumb">
              <SliderIcon className="sliderIcon" />
            </span>
          </span>
          <span className="visually-hidden"> Price</span>
        </label>
      </div>
    );
  }
}
class CardTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: pricing[4].price,
      views: `${pricing[4].viewsValue}${pricing[4].viewsSymbol}`,
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
        {/* {JSON.stringify(this.state)} */}
        <div className="card-content__top">
          <h3 className={font.cardTitle}> {this.state.views} pageviews </h3>
          <div className="card-top__pricing">
            <output
              className={font.billingTag}
            >{`$ ${this.state.price}.00`}</output>
            <p className={font.smallText}> / month</p>
          </div>
        </div>
        <Slider
          // price={this.state.price}
          // //
          onPriceChange={this.handlePriceChange.bind(this)}
          onViewsChange={this.handleViewsChange.bind(this)}
        />
        <div className="card-content__bottom">
          <fieldset className={styles.toggleButton} aria-label="pricing toggle">
            <legend className="visually-hidden">Billing option</legend>
            <label htmlFor="monthly" className={font.smallText}>
              Monthly billing
            </label>
            <div className={styles.toggleWrapper}>
              <input
                className={styles.toggleMonthly}
                type="radio"
                id="monthly"
                name="notify"
                value="monthly"
                checked={true}
              />
              <input
                className={styles.toggleYearly}
                type="radio"
                id="yearly"
                name="notify"
                value="yearly"
              />
              <span aria-hidden="true" className={styles.toggleBall}></span>
            </div>
            <label htmlFor="yearly" className={font.smallText}>
              Yearly billing
            </label>
          </fieldset>
          <span className={styles.discountTag}> 25% discount</span>
        </div>
      </div>
    );
  }
}
function Card() {
  return (
    <div className="card">
      <h2 className="visually-hidden">Pricing card </h2>
      <CardTop />
      <CardFooter />
    </div>
  );
}
export default Card;
