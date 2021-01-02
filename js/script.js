var Toggle = document.querySelector(`.site-header__menu`);
var NavWrapper = document.querySelector(`.nav__wrapper`);
var Lists = document.querySelector(`.nav__lists`);

Toggle.addEventListener('click', function () {
  NavWrapper.classList.toggle(`nav__updown--active`);

  Lists.classList.toggle(`nav__lists--active`);

});


var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute(`class`, elementClass);
  };

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

var channels = [
  {
    Img: `img/brief.png`,
    Retina: `img/brief@2x.png`,
    Duration: `4:15`,
    Heading: `A Brief History Of Creation`,
    Views: `80k views  ·  3 days ago`,
    Author: `Dollie Blair`,
    id: `ch001`
  },

  {
    Img: `img/hotel.png`,
    Retina: `img/hotel@2x.png`,
    Duration: `8:00`,
    Heading: `Selecting The Right Hotel`,
    Views: `123k views  ·  1 months ago`,
    Author: `Dollie Blair`,
    id: `ch002`
  },

  {
    Img: `img/asteroids.png`,
    Retina: `img/asteroids@2x.png`,
    Duration: `5:32`,
    Heading: `Asteroids`,
    Views: `43k views  ·  12 days ago`,
    Author: `Dollie Blair`,
    id: `ch003`
  },

  {
    Img: `img/telescope.png`,
    Retina: `img/telescope@2x.png`,
    Duration: `6:40`,
    Heading: `Telescopes 101`,
    Views: `11k views  ·  6 months ago`,
    Author: `Dollie Blair`,
    id: `ch004`
  },

  {
    Img: `img/medical.png`,
    Retina: `img/medical@2x.png`,
    Duration: `1:45`,
    Heading: `Medical Care Is Just`,
    Views: `18k views  ·  2 days ago`,
    Author: `Dollie Blair`,
    id: `ch004`
  },

  {
    Img: `img/moon.png`,
    Retina: `img/moon@2x.png`,
    Duration: `2:12`,
    Heading: `Moon Gazing`,
    Views: `67k views  ·  4 months ago`,
    Author: `Dollie Blair`,
    id: `ch005`
  }
];

// var WatchLater = []

// var elWatchLaterList = $_(".watch-later__list")
// var updateWatchLater = () => {
//   elWatchLaterList.innerHTML = ""
//   var elWatchLaterFragment  = document.createDocumentFragment()
//   console.log(elWatchLaterList);
//   var elChannelTemplate  = $_(".channel__template").content

//   WatchLater.forEach((channel,index)=>{
//     var elCloneWatchLaterTemplate = elChannelTemplate.cloneNode(true);
//     $_(".channel__btn",elCloneWatchLaterTemplate).dataset.id = channel.Id;
//     $_(".channel__link-img",elCloneWatchLaterTemplate).src = channel.Img;
//     $_(`.channel__link-img`, elChannelItem).srcset = channel.Retina;
//     $_(".channel__link-duration",elCloneWatchLaterTemplate).textContent = channel.Duration;
//     $_(".channel__link-heading",elCloneWatchLaterTemplate).textContent = channel.Heading;
//     $_(".channel__link-date",elCloneWatchLaterTemplate).textContent = channel.Views;
//     $_(".channel__link-name",elCloneWatchLaterTemplate).textContent = channel.Author;

//     elWatchLaterFragment.appendChild(elCloneWatchLaterTemplate)

//   })
//   console.log(elWatchLaterFragment);
//   elWatchLaterList.appendChild(elWatchLaterFragment)
// }


// var addWatchLater = (array,clicked)=> {
//   clicked.addEventListener("click",(e)=>{
//     if (e.target.matches("button")) {
//       array.forEach((channel)=>{
//         if (channel.id === e.target.dataset.id) {
//           console.log(e.target.dataset.id);
//           WatchLater.push(channel)
//           updateWatchLater()
//         }
//       })
//     }
//   })
// }





var elChannelTemplate = $_(`.channel__template`).content;

var elChannelsFragment = document.createDocumentFragment();
channels.forEach(function (channel, index) {

  var elChannelItem = elChannelTemplate.cloneNode(true);

  $_(`.channel__link-img`, elChannelItem).src = channel.Img;
  $_(`.channel__link-img`, elChannelItem).srcset = channel.Retina;
  $_(`.channel__link-duration`, elChannelItem).textContent = channel.Duration;
  $_(`.channel__link-heading`, elChannelItem).textContent = channel.Heading;
  $_(`.channel__link-date`, elChannelItem).textContent = channel.Views;
  $_(`.channel__link-name`, elChannelItem).textContent = channel.Author;
  $_(`.channel__btn`, elChannelItem).dataset.channelId = channel.id;

  elChannelsFragment.appendChild(elChannelItem);

});

$_(`.channel__list`).appendChild(elChannelsFragment);

var recommendeds = [
  {
    Img: `img/dude.png`,
    Retina: `img/dude@2x.png`,
    Duration: `3:40`,
    Heading: `Dude You Re Getting A Telescope`,
    Views: `34k views  ·  5 months ago`,
    Author: `Gussie French`
  },

  {
    img: `img/gazing.png`,
    Retina: `img/gazing@2x.png`,
    Duration: `2:12`,
    Heading: `Moon Gazing`,
    Views: `54k views  ·  11 months ago`,
    Author: `Edward Osborne`
  },

  {
    Img: `img/dude.png`,
    Retina: `img/dude@2x.png`,
    Duration: `4:15`,
    Heading: `Dude You Re Getting A Telescope`,
    Views: `34k views  ·  5 months ago`,
    Author: `Gussie French`
  }
];

var elRecommendedTemplate = $_(`.recommended__template`).content;

var elRecommendedsFragment = document.createDocumentFragment();
recommendeds.forEach(function (recommended) {

  var elRecommendedItem = elRecommendedTemplate.cloneNode(true);

  $_(`.recommended__link-img`, elRecommendedItem).src = recommended.Img;
  $_(`.recommended__link-img`, elRecommendedItem).srcset = recommended.Retina;
  $_(`.recommended__link-duration`, elRecommendedItem).textContent = recommended.Duration;
  $_(`.recommended__link-heading`, elRecommendedItem).textContent = recommended.Heading;
  $_(`.recommended__link-date`, elRecommendedItem).textContent = recommended.Views;
  $_(`.recommended__link-name`, elRecommendedItem).textContent = recommended.Author;

  elRecommendedsFragment.appendChild(elRecommendedItem);

});

$_(`.recommended__list`).appendChild(elRecommendedsFragment);


var meals = [
  {
    Img: `img/ice-cream-bread.png`,
    Retina: `img/ice-cream-bread@2x.png`,
    Duration: `7:36`,
    Heading: `Astronomy Or Astrology`,
    Views: `240k views  ·  4 months ago`,
    Author: `Food & Drink`
  },

  {
    img: `img/cherry.png`,
    Retina: `img/cherry@2x.png`,
    Duration: `2:19`,
    Heading: `Advertising Outdoors`,
    Views: `13k views  ·  15 days ago`,
    Author: `Food & Drink`
  },

  {
    Img: `img/spagetti.png`,
    Retina: `img/spagetti@2x.png`,
    Duration: `9:05`,
    Heading: `Radio Astronomy`,
    Views: `1k views  ·  11 months ago`,
    Author: `Food & Drink`
  },

  {
    Img: `img/mandarin.png`,
    Retina: `img/mandarin@2x.png`,
    Duration: `3:40`,
    Heading: `A Good Autoresponder`,
    Views: `45k views  ·  2 months ago`,
    Author: `Food & Drink`
  },

  {
    Img: `img/baby-monitor.png`,
    Retina: `img/baby-monitor@2x.png`,
    Duration: `1:56`,
    Heading: `Baby Monitor Technology`,
    Views: `86k views  ·  7 days ago`,
    Author: `Food & Drink`
  },

  {
    Img: `img/watermelon.png`,
    Retina: `img/watermelon@2x.png`,
    Duration: `4:15`,
    Heading: `Asteroids`,
    Views: `123k views  ·  4 months ago`,
    Author: `Food & Drink`
  }
];

var elMealTemplate = $_(`.meal__template`).content;

var elMealsFragment = document.createDocumentFragment();
meals.forEach(function (meal) {

  var elMealItem = elMealTemplate.cloneNode(true);

  $_(`.meal__link-img`, elMealItem).src = meal.Img;
  $_(`.meal__link-img`, elMealItem).srcset = meal.Retina;
  $_(`.meal__link-duration`, elMealItem).textContent = meal.Duration;
  $_(`.meal__link-heading`, elMealItem).textContent = meal.Heading;
  $_(`.meal__link-date`, elMealItem).textContent = meal.Views;
  $_(`.meal__link-name`, elMealItem).textContent = meal.Author;

  elMealsFragment.appendChild(elMealItem);

});

$_(`.meal__list`).appendChild(elMealsFragment);
