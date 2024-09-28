---
title: "Getting ARAM balance changes"
description: "An overview on the possible ways to get balance changes."
timestamp: 1727483156
tags: "riot-api,lol,aram"
---

ARAM balance changes and other effects is a commonly requested feature on the [Third Party Developer Discord](https://discord.gg/riotgamesdevrel). Unfortunately, Riot Games does not provide this data in the Riot API and is not found in either DataDragon or CommunityDragon. Thankfully, there are resources to help with that.

## Resources

There are many ways you can obtain balance changes data:

- [Aurora Box](https://github.com/BlossomiShymae/AuroraBox)
- [lolstaticdata](https://github.com/meraki-analytics/lolstaticdata)
- [Meraki Analytics CDN](http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json)
- Manually scraping from League Fandom

If your app is in an environment that allows the usage of external CLI tools, scripts, or resources, then I recommend using any of the above to save time. :3

These pages are of interest if you want to scrape changes.
- https://leagueoflegends.fandom.com/wiki/ARAM
- https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data
- https://leagueoflegends.fandom.com/wiki/Template:Map_changes/data/aram?action=edit

![img](img/league-fandom-aram.png)

The ARAM page gets it data from Lua modules and templates in the second and third links. These pages are always changing, so be warned that any code written has the chance to break on any schema or layout change. Expect to maintain code in any active app.