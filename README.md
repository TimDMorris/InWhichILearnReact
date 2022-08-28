<div id="top"></div>

# InWhichILearnReact

It's a repository in which I'm learning React, it's shared in case it's useful for anyone else

<p>

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/timdmorris/InWhichILearnReact)
[![CI Status](https://github.com/TimDMorris/InWhichILearnReact/workflows/build-and-deploy/badge.svg)](https://github.com/TimDMorris/InWhichILearnReact/actions)
[![CodeQL](https://github.com/TimDMorris/InWhichILearnReact/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/TimDMorris/InWhichILearnReact/actions/workflows/codeql-analysis.yml)

</p>

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://jestjs.io/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a><a href="https://www.typescriptlang.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" height="40px" width="40px" /></a>

<p align="right">(<a href="#top">back to top</a>)</p>

## Stuff I'm thinking about

The notes below are primarily for me to keep track of what I'm thinking about, but as I'm a big fan of <em>knowledge in the world, not knowledge in the head</em>, I thought I should share them with the world here.

### Styling and Theming

I'm learning React to build Enterprise scalable web applications. There's a lot of cool technologies I want to use but I have concerns about anything that is going to add a marginal performance hit that could then scale up to be a noticeable performance hit as I scale up apps.

So while having come from an Angular Background the mental model of Styled Components is pretty appealing to me, with some qualifiers:

- [A Lukewarm Approval of CSS-in-JS](https://sparkbox.com/foundry/css_in_js_overview_css_in_js_pros_and_cons)

I'm a little concerned about the potential performance hit:

- [Real-world CSS vs. CSS-in-JS performance comparison](https://pustelto.com/blog/css-vs-css-in-js-perf/)

Now while there are some really promising looking strategies to address this:

- [CSS-in-JS Performance Cost - Mitigating Strategies](https://www.infoq.com/news/2020/01/css-cssinjs-performance-cost/)
- [How to increase CSS-in-JS performance by 175x](https://itnext.io/how-to-increase-css-in-js-performance-by-175x-f30ddeac6bce)

For the time being I have a lot of other React stuff to be thinking about so I'm going to stick with nice straightforward [BEM based styling](http://getbem.com/introduction/) and worry about potentially refactoring it to something smarter later. For more on BEM [check out this piece on why BEM](https://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/) and if it's interesting to you there's more [here under getting your head around BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

I'm also thinking that if I want to build to scale then I don't necessarily want to be builfing everything from the ground up, so on my list of other things to look at are:

- [How to Use Tailwind With BEM](https://www.wearecogworks.com/blog/how-to-use-tailwind-with-bem/)
- [Tailwind CSS and BEM](https://codeblog.trovster.com/2020/04/tailwind-and-bem/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Running This Project

### Installation

```sh
npm install
```

#### Usage

```sh
npm run start
```

#### Run tests

```sh
npm run test
```

## License

<a href="https://choosealicense.com/licenses/mit/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/mit.svg" height=40 />MIT License</a>

## Author

👤 **TimDMorris**

- Website: <https://cambridgemonorail.github.io/InWhichILearnReact/>
- Twitter: [@TimDMorris](https://twitter.com/TimDMorris)
- Github: [@TimDMorris](https://github.com/TimDMorris)
- LinkedIn: [@timdmorris](https://linkedin.com/in/timdmorris)

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgements

- Blog: [The React CLI you always wanted but didn’t know about](https://blog.nrwl.io/the-react-cli-you-always-wanted-but-didnt-know-about-eaa2494aab9e)
- YouTube: [React Portfolio Website Tutorial From Scratch](https://www.youtube.com/watch?v=G-Cr00UYokU)

<p align="right">(<a href="#top">back to top</a>)</p>
