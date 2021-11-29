# Interactive pricing component

![Design preview for the Social media dashboard with theme switcher coding challenge](/public/assets/desktop-preview.jpg)

## Table of contents

- [The challenge](#the-challenge)
- [What I learned](#what-I-learned)
- [Links](#Links)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### What I learned

That was one of the hardest challenges I had to take, implementing an accessible slider and customizing it was fairly hard. I used the 'output' tag for both -page views- and -months- to ensure that any changes happen when the slider moves the values caught.

To customize the slide I had to add a couple of layouts on top of `<input type=range>` and make the slider transparent.

I am looking to add some animation using (Framer Motion) so a couple of changes will come sooner.

When it comes to style I tried to use both regular CSS (for the general style layout) and CSS modules (for styling components), I had to add some Webpack configuration to use both, here is the snippet I added to the Webpack config file.

`module: { rules: [ // First Rule { test: /\.(js)$/, loader: 'babel-loader', exclude: /node_modules/, }, { test: /\.css$/i, use: [ 'style-loader', { loader: 'css-loader', options: { modules: true, importLoaders: 1, }, }, // 'postcss-loader', ], include: /\.module\.css$/, }, { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /\.module\.css$/, }, ], },`

I am still new to React so maybe my current solution isn't the best, I will add some changes in the future while I still learning and practicing.

Some resources that helped me in this challenge:

- [Creating an Accessible Range Slider with CSS](https://www.a11ywithlindsey.com/blog/creating-accessible-range-slider-css).
- [Accessible slider codepen](https://codepen.io/smhigley/pen/ObWbdy)

### Links

- Live Site URL: [Add live site URL here]()

Made with 💖 by [Zineb Boutaa](https://zineb-bou.github.io/)
