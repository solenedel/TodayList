# 📝 TodayList

To-do list app using PERN (Postgres, Express, React, Node) stack.

To run in development mode: `npm run dev`

## Setting up the database

After creating a Postgres database, in PSQL run: 

1. `\i server/db/schema.sql`
2. `\i server/db/seeds.sql`

To reset the database subsequently, run in the node terminal: `npm run reset-db`

## Features


- add items to the "today" and tomorrow" list
- delete items from the list OR mark as completed
- select an icon for each list item (form fontawesome)
- move items between the two lists by dragging and dropping
- create custom list, delete list
- customise background and list color

