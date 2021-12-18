# Aislegy

A grocery shopping app for people who are alergic to aisles.

I really _hate_ going grocery shopping. One could even say I'm _alergic_ to _aisles_ - I have an **aislegy**.

This will start as a basic grocery shopping CRUD list app for myself and I'll probably add more features along the way, who knows.

Here are some ideas:

## TODO

- [ ] Basic local list app;
- [ ] Items can be added, edited, removed, checked from the list;
- [ ] Items should be "saved" - Next time you add an item, it's a suggestion in autocomplete;
- [ ] Items should allow the user to optionally insert a price and location (which supermarket / store);
- [ ] Dark theme;
- [ ] DB models: List, ListItem, Item (the item to show up in autocomplete), Store, User (in order for items and stores to be shared with other users, they should go through an approval / moderation stage);
- [ ] Feature to have multiple lists;
- [ ] Publish the app as PWA;
- [ ] Be able to create new lists from existing lists (duplicate);
- [ ] Authentication (OAuth, Google, etc);
- [ ] Save list in cloud;
- [ ] Shareable lists;

### Bonus

- [ ] Improve README;
- [ ] Build the app for "all" platforms;
- [ ] Sockets (co-op shopping);
- [ ] Gamification;
- [ ] Reward users that contribute;
- [ ] Basic stats (how much you spent / saved this month, etc);
- [ ] Basic analytics (how many people use the app, etc);
- [ ] Create REST / GraphQL API;
- [ ] Save stores by "GPS location";
- [ ] Support custom styles / themes;
- [ ] i18n;
- [ ] If the app becomes good enough, maybe publish on app stores;
- [ ] If the app becomes good enough, figure out some kind of "business plan" - monetization;

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```
