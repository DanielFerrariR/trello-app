<h1 align="center">
  Trello App
</h1>

[![Node.js CI](https://github.com/DanielFerrariR/trello-app/actions/workflows/node.js.yml/badge.svg)](https://github.com/DanielFerrariR/trello-app/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/DanielFerrariR/trello-app/graph/badge.svg?token=cggIbUEbi9)](https://codecov.io/gh/DanielFerrariR/trello-app)

## TOC

- [Working in Progress](#working-in-progress)
- [Configuration](#configuration)
- [Links](#links)

## Working in Progress

### Required features

- [x] Create Board
- [x] Delete Board
- [x] Edit Board Title
- [x] Create List
- [x] Delete List
- [x] Create Card
- [x] Edit Card
- [x] Delete Card
- [x] Move Cards between lists
- [x] Keep boards state in localStorage
- [x] Add storybook stories for all components
- [x] Add missing tests

### Additional features

Project related

- [ ] Missing tests for Modal and Home Page

General features

- [ ] Member Account

Board features

- [ ] Clone board
- [ ] Archived items
- [ ] Share link
- [ ] Export board
- [ ] Activity history
- [ ] Board title should be applied to browser tab name

Card features

- [ ] Create a new card should focus in the new card textbox and show add/close buttons, if no text is added, it deletes the new card
- [ ] Change card order in the list
- [ ] Dragged card missing board radius (needs to replace dragged image or use external drag and drop library)
- [ ] Edit icon on hover / Right click on card opens a edit text modal and show an action bar
- [ ] Clone card
- [ ] Archive card
- [ ] Move all cards from a list to the other
- [ ] Comments
- [ ] Dates
- [ ] Layers
- [ ] Tags
- [ ] Members

Edit Card Modal

- [ ] Click in 'in the list [list name]' opens 'Move card' modal
- [ ] Unsaved changes for description
- [ ] RichText description

List features

- [ ] Actions Menu
- [ ] Clone list
- [ ] Archive list
- [ ] Move list between boards

## Configuration

1. **Install these packages (prefer the listed versions):**

- node v20.10.0

2. **Install all dependencies**

```sh
npm install
```

3. **Start the development server**

```sh
npm start
```

4. **Commands**

```bash
# Install all dependencies
$ npm install

# Run for web development
$ npm start

# Build for web production (compiled to build folder)
$ npm run build

# Export configuration files
$ npm run eject

# Run Storybook
$ npm run storybook

# Build Storybook
$ npm run build-storybook

# Run Chromatic (needs a .env file with CHROMATIC_PROJECT_TOKEN token)
$ npm run chromatic
```

## Links

[Codcov](https://app.codecov.io/gh/DanielFerrariR/trello-app)
