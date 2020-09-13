# Bard Bot
A bot for telling stories

# Design
## Definitions
### **User**
A user simply refers to a Discord guild member, who may or may not be participating in a current game.

### **Player**
A player is a user who has joined a game. They will be in a chat that corresponds to a particular game and can contribute to the story line through typical game controls (e.g. bot commands, voting, etc.).

### **Storyline**
A storyline refers to the static assets behind a particular game, which includes and summarizes game mechanics like action mappings, dialog options, and interactive objects. Storylines are practically synonymous with the file(s) that contain(s) all the storyline metadata.

### **Game**
A game is a storyline that is actively being played.

## Game Setup and Assumptions
* Many players can only control a single character - a la Twitch Plays
* Players interact with the game through bot commands and voting
* Players may be allowed to communicate between each other in the chat - the bot will only respond to explicit commands
* There is only a single game that can be used - players are not allowed to pick a storyline
* All party members have equal say in the actions of the character (i.e. no admins or super players)
* A game ends when the players have encountered one of many win (or lose) conditions
* Games may have a max party size of 5

## Beginning a Game
* A single player runs a command to start a game and tags everyone they'd like to join their party (up to 4 others)
* Tagged players can accept their invite at any time, even after the game has begun
* No one other than the game initiatior and the tagged players can join a game
* A user can only interact with the game if they are a player (i.e. run bot commands)
* The game initiator can start a game at any time after tagging 0 or more other users

## Playing a Game
* Players will be shown dialogue from NPCs within the world a la pretty much every other text-based adventure game
* Players will be shown prompts for actions or dialogue responses
* Actions include: talk, inspect, use, travel, give, take
* Dialogue responses will comprise pre-created strings provided at the time the story was created
* Lists of actions and dialogue responses will be numbered or keyed
* Players can run bot commands to select a dialogue response or run an action with an item on an item

# The Storyline Model
* How are items, dialogue, NPCs, locations, etc. stored in a portable manner
* Players can be in/travel to places
* NPCs can be in/travel to places
* Graph format for cities/map and routing
* Define some global event storage - ties in with clerical info about storyline
* Refer to global event storage to determine which statically defined conversation branch ought to be used
* Events do not payloads - just boolean setting
* Conversation trees are defined as query nodes coupled by event edges
* Towns can be modified or recreated from scratch for small and large changes respectively

# The Interaction Model
* Players need a way to see dialogue, descriptions, and other clerical information about the storyline
* Players need a way to see prompts for available actions
* Players need a way to perform actions
* Players need a way to store objects
* ?? Players need a way to view a map (a la http://adarkroom.doublespeakgames.com/ (https://github.com/doublespeakgames/adarkroom))
