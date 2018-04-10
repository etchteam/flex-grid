# Flex Grid

A super simple, flexbox based, grid system.

## Installation

Import `index.js` and `_flex-grid.scss` from `./FlexGrid`;

There are two variables `$grid-gutter-width` and `$bp`;

The grid gutter width is a gutter value, it can be any size value.
the bp variable is short for breakpoints, it is a sass map of breakpoint values containing: xs, sm, md, lg.

## Run the demo

- Clone the repo
- Run `npm install`
- Run `npm run start`
- Look at http://localhost:8080

## Options
Most of the flexbox API is exposed, giving you full flexbox grid control wrapped up in a couple of components.

There's a [handy guide on CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) if you get stuck.

### FlexGrid

| Property  | Type    | Values                                                    | Default    |
|-----------|---------|-----------------------------------------------------------|------------|
| direction | string  | row, row-reverse, column, column-reverse                  | row        |
| align     | string  | flex-start, flex-end, center, baseline, stretch           | stretch    |
| justify   | string  | flex-start, flex-end, center, space-between, space-around | flex-start |
| wrap      | boolean |                                                           | false      |

### FlexGrid.Item

| Property | Type    | Values                                          | Default |
|----------|---------|-------------------------------------------------|---------|
| grow     | boolean |                                                 | false   |
| shrink   | boolean |                                                 | false   |
| flex     | boolean |                                                 | false   |
| align    | string  | flex-start, flex-end, center, baseline, stretch | stretch |
