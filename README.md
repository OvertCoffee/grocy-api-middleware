# grocy-api-middleware
Middleware API for automating grocy inventory management.

## Design Goals

- [ ] Use output of the inventory scraper and add to grocy's inventory.
    - [ ] Check item names against database of known items, convert to common name where applicable.
        * e.g. accept either "Klassen Dill Sliced Pickle Chips" or "Great Value Pickle Chips" and replenish the same item in grocy.

- [ ] Provide backend to a web app for decrementing/managing inventory.
