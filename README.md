# PORTAL TOOL

Created in 2019 for work purposes, the tool was made to make life easier in my team. It consists of an aggregation of tools used in daily working tasks into one single page, easily accessible and looking like a portal.

This tool has been created from a Gatsby starter and then heavily modified with ReactJS. The visualization of the internal tools happens thanks to an iFrame. It's deployed (or served) directly on an Apache server. 

## STRUCTURE

### src/pages/index.js

It's the main class component of the application; all functions are stored here, and are passed to the various children components

### src/components

It contains Header and Sidebar with the named components and links. 
The Layout component is a child of the Sidebar and it contains metadata from graphQL.
The Main component includes the main frame of the single page.