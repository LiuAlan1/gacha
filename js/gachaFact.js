var surveyFacts = [
    'According to a <a href="https://www.wired.com/2012/08/gacha-watch-buyers-remorse/">survey</a>, 26.4% of Japanese players surveyed regret their purchases.',
    'According to a <a href="https://www.wired.com/2012/08/gacha-watch-buyers-remorse/">survey</a>, 2.3% of Japanese players surveyed spent more than the USD equivalant of $381.',
    'While uncommon, some games with gachas or loot boxes had their rates tampered in the past.',
    '<a href="https://medium.com/7chain/how-are-drop-rates-manipulated-in-games-3f3ee4e3a974">Drop rates can be manipulated</a>; for example, the rates can once a certain number has been drawn.',
    '<a href="https://medium.com/7chain/how-are-drop-rates-manipulated-in-games-3f3ee4e3a974">Drop rates can be manipulated</a>; for example, the more one draws, the better the chance of getting the desired result.',
    '<a href="https://medium.com/7chain/how-are-drop-rates-manipulated-in-games-3f3ee4e3a974">Drop rates can be manipulated</a>; for example, a result can be impossible to obtain unless the player draws a certain amount.',
    'Mostly due to <a href="https://www.gamespot.com/articles/star-wars-battlefront-2s-loot-box-controversy-expl/1100-6455155/">Star Wars Battlefront II</a>, loot boxes and gachas were under investigation since the end of 2017 to determine if they should officially be classified as a form of gambling or not.',
    'A "whale" is a person or player that spends a lot of money in hopes of getting their target or desired item.',
    'The term "whale" originated from casinos, which the term was more better known as "high-roller".',
    'Loot boxes and gachas were more regulated since the controversy behind <a href="https://www.gamespot.com/articles/star-wars-battlefront-2s-loot-box-controversy-expl/1100-6455155/">Star Wars Battlefront II</a>, requiring developers to publish the odds of obtaining each individual item.',
    'Loot boxes are addictive in a way that it can be seen as <a href="https://www.theguardian.com/games/2018/aug/17/video-game-loot-boxes-addictive-and-a-form-of-simulated-gambling-senate-inquiry-told">"simulated gambling"</a>.',
    'Modern day gacha in mobile games and loot boxes are mostly insipred from Japanese gachapon, or toy capsules.',
    'In app purchases, in general, are very predatory, <a href="https://www.nytimes.com/2019/02/06/technology/personaltech/children-charges-mobile-games.html">especially towards children</a>.',
];

var randomIndex1 = Math.floor(Math.random() * surveyFacts.length);
var randomFact = surveyFacts[randomIndex1];

localStorage.setItem("randomFact", randomFact);

var drawProbability = [
    'The chance of an <span class="URtext">[UR]</span> is <span class="highlight">0.75%</span>.',
    'The chance of a <span class="SRtext">[SR]</span> is <span class="highlight">5.00%</span>.',
    'The chance of a <span class="SRtext">[SR]</span> is <span class="highlight">5.00%</span>.',
    'The chance of a <span class="Rtext">[R]</span> is <span class="highlight">30.00%</span>.',
    'The chance of a <span class="Rtext">[R]</span> is <span class="highlight">30.00%</span>.',
    'The chance of a <span class="Rtext">[R]</span> is <span class="highlight">30.00%</span>.',
    'The chance of a <span class="Rtext">[R]</span> is <span class="highlight">30.00%</span>.',
    'The chance of a <span class="Rtext">[R]</span> is <span class="highlight">30.00%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
    'The chance of a [C] is <span class="highlight">64.25%</span>.',
];
var randomIndex2 = Math.floor(Math.random() * drawProbability.length);
var drawProbabilityFact = drawProbability[randomIndex2];

localStorage.setItem("drawProbabilityFact", drawProbabilityFact);