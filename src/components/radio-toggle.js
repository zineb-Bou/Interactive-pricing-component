import React from 'react';
import styles from '../style/interactiveCpnt.module.css';
import font from '../style/typography.module.css';

class RadioToggle extends React.Component {
  toggleMonthlyBilling() {
    this.props.onToggle(32);
  }
  toggleYearlyBilling() {
    this.props.onToggle(24);
  }
  render() {
    return (
      <fieldset className={styles.toggleButton} aria-label="pricing toggle">
        <legend className="sr-only">Billing option</legend>
        <label htmlFor="monthly" className={font.smallText}>
          Monthly billing
        </label>
        <div className={styles.toggleWrapper}>
          <input
            className={styles.toggleMonthly}
            type="radio"
            id="monthly"
            name="billing-frequency"
            value="monthly"
            onChange={this.toggleMonthlyBilling.bind(this)}
          />
          <input
            className={styles.toggleYearly}
            type="radio"
            id="yearly"
            name="billing-frequency"
            value="yearly"
            onChange={this.toggleYearlyBilling.bind(this)}
          />
          <span aria-hidden="true" className={styles.toggleBall}></span>
        </div>
        <label htmlFor="yearly" className={font.smallText}>
          Yearly pricing
        </label>
      </fieldset>
    );
  }
}
export default RadioToggle;
