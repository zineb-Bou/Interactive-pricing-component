import React from 'react';
import { SliderIcon } from './icons';
import styles from '../style/interactiveCpnt.module.css';
import icon from '../style/icons.module.css';
import { pricing } from './data';
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderThumb = React.createRef();
    this.sliderWidth = React.createRef();
  }
  handleThumbChnge(d, w) {
    this.sliderThumb.current.style.left = d;
    this.sliderWidth.current.style.width = w;
  }
  handleViewsChange(views) {
    this.props.onViewsChange(views);
  }
  handleValueChange(e) {
    const max = e.target.getAttribute('max');
    const value = e.target.value;
    const d = (value / max) * 100 + '%';
    const w = (value / max) * 100 + '%';
    const price = pricing[value].price;
    const views = `${pricing[value].viewsValue}${pricing[value].viewsSymbol}`;
    this.props.onPriceChange(price);
    this.handleViewsChange(views);
    this.handleThumbChnge(d, w);
  }
  render() {
    return (
      <div className={styles.slider}>
        <label className="sr-only" htmlFor="price">
          On a scale of 8 to 36, get how pricing and pageviews
        </label>
        <input
          className={styles.sliderInput}
          id="price"
          type="range"
          min="0"
          max="4"
          value="2"
          onChange={this.handleValueChange.bind(this)}
        />
        <span className={styles.sliderWrapper} aria-hidden="true">
          <span
            className={styles.sliderTrack}
            aria-hidden="true"
            ref={this.sliderWidth}
          ></span>
          <span className={styles.sliderThumb} ref={this.sliderThumb}>
            <SliderIcon className={icon.slider} />
          </span>
        </span>
      </div>
    );
  }
}

export default Slider;
