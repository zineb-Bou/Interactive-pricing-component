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
  constructor(props) {
    super(props);
    this.sliderThumb = React.createRef();
    this.sliderWidth = React.createRef();
  }
  handleThumbChnge(d, w) {
    this.sliderThumb.current.style.setProperty('--d', d);
    this.sliderWidth.current.style.width = w;
  }
  handleViewsChange(views) {
    this.props.onViewsChange(views);
  }
  handleValueChange(e) {
    const max = e.target.getAttribute('max');
    const value = e.target.value;
    const d = (value / max) * 29 + 'rem';
    const w = (value / max) * 29 + 'rem';
    const price = pricing[value].price;
    const views = `${pricing[value].viewsValue}${pricing[value].viewsSymbol}`;
    this.props.onPriceChange(price);
    this.handleViewsChange(views);
    this.handleThumbChnge(d, w);
  }
  render() {
    return (
      <label htmlFor="price" className="sliderbar">
        <span className="visually-hidden">
          On a scale of 8 to 36, get how pricing and pageviews
        </span>
        <span className="slider">
          <input
            id="price"
            type="range"
            min="0"
            max="4"
            onChange={this.handleValueChange.bind(this)}
            className="sliderInput"
          />
          <span className="sliderWrapper" aria-hidden="true">
            <span
              className="sliderTrack"
              aria-hidden="true"
              ref={this.sliderWidth}
            ></span>
            <span className="sliderThumb" ref={this.sliderThumb}>
              <SliderIcon className="sliderIcon" />
            </span>
          </span>
        </span>
      </label>
    );
  }
}
class CardTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: pricing[0].price,
      views: `${pricing[0].viewsValue}${pricing[0].viewsSymbol}`,
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
  ShowMonthlyBilling() {
    this.setState({ price: 32 });
  }
  ShowYearlyBilling() {
    this.setState({ price: 24 });
  }
  render() {
    return (
      <div className="card-content">
        {/* {JSON.stringify(this.state)} */}
        <div className="card-content__top">
          <h3 className={font.cardTitle}> {this.state.views} pageviews </h3>
          <div className="card-top__pricing">
            <output
              htmlFor="price"
              className={font.billingTag}
            >{`$ ${this.state.price}.00`}</output>
            <p className={font.smallText}> / month</p>
          </div>
          <Slider
            onPriceChange={this.handlePriceChange.bind(this)}
            onViewsChange={this.handleViewsChange.bind(this)}
          />
        </div>
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
                // checked={true}
                onChange={this.ShowMonthlyBilling.bind(this)}
              />
              <input
                className={styles.toggleYearly}
                type="radio"
                id="yearly"
                name="notify"
                value="yearly"
                onChange={this.ShowYearlyBilling.bind(this)}
              />
              <span aria-hidden="true" className={styles.toggleBall}></span>
            </div>
            <label htmlFor="yearly" className={font.smallText}>
              Yearly pricing
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
