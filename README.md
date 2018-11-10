# Robots-JU FLL 2018 Scoreboard

Unofficial web scoreboard for the FLL 2018 (Into Orbit) Robot Game.

This is a private project that is not supported or approved by the FIRST® LEGO® League.
However it may be the official scoreboard for some events organised by [Robots-JU](https://robots-ju.ch/).

Feel free to report bugs and suggestions in the issues !

## How to use

[Robots-JU](https://robots-ju.ch/) hosts the latest version at <https://fll-scoreboard-2018.robots-ju.ch/>.
No need to install anything !

### Compile yourself

This is a Mithril application that uses our [Robot Game Scorer library](https://github.com/robots-ju/fll-robotgame-scorer-2018) for unit tested output.
It is build with Babel and Webpack via Laravel Mix.

```bash
# Clone the repo, and run the following in it to build the app
yarn install
yarn dev # also check `yarn watch` and `yarn production`, these are standard Laravel Mix shortcuts
# Application is ready in the `site` folder
# Just open `site/index.html` in your browser to start
```

## Images copyrights

The table overview image and the Into Orbit logo come from the official [Robot Game material](http://www.firstlegoleague.org/challenge).
Both images were resized and compressed to a more suitable size.

The missions illustrations displayed with each task come from the [Missions overview page](https://www.first-lego-league.org/en/season/robot-game/missions.html) on the FLL Europe website by HANDS on TECHNOLOGY.
Thanks for making them, they are great !

## Text copyrights

Applies to all mission strings in `missions.json`.

- The English rules are copied from the Hands on Technology [Missions overview page](https://www.first-lego-league.org/en/season/robot-game/missions.html).
- The French rules are copied from the PDF hosted on the EPFL [FLL rules page](https://sps.epfl.ch/jeunepublic/fll-2/fll-regles/).

## Code license

This code is released under [the MIT license](LICENSE.txt).
The logic behind the scoreboard is hosted at <https://github.com/robots-ju/fll-robotgame-scorer-2018> and is also subject to the MIT.
