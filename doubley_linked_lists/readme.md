# Doubley Linked Lists

## Contents
- [Common Uses](#common-uses)
- [Benefits](#benefits)
- [Limitations](#limitations)
- [Alternatives](#alternatives)

## Common Uses
- Storing lists of data, when the number of items in the list is unknown.

## Benefits
- Easy to add information to the end of list, (essentially length is only limited by computer memory)
- Can move between both previous and next node. (compared to [Linked Lists](#alternatives))

## Limitations
- Can take longer to retrieve data from the list
    - Cannot access information by its index
    - You need to loop through the list one node at a time to retrieve data

## Alternatives
[Arrays](../arrays/readme.md) - If you know how many items will be added to the list, or want to access information by its index.

[Linked Lists](../linked_lists/readme.md) - If you only need to be able to move to the next node.