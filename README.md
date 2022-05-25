# meowbert
### a simple discord bot
Meowbert began as a small project to replicate the Question of the Day functionality of another Discord bot. It'll have more functionality in the future, but for now all it does is send a Question of the Day at 7am CDT.

type `/help` to view commands, some of which are admin-only.

## building and deploying
I don't suggest trying to build this, just ping me if you want it added to your server
--but--
make sure to create a `.env` file in the root directory with the following parameters:
```
DISCORD_API_TOKEN="*api token goes here*"
DISCORD_CLIENT_TOKEN="*client token goes here*"
TEST_GUILD_TOKEN="*test guild token goes here, if not building to production*"
DB_FILE_PATH="./your/db/path/here"
```