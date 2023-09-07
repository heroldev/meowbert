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
DEV_TOKEN="*your discord account ID goes here*"
ADDL_USER_TOKEN="*additional user ID goes here*"
FEELINGS_CHANNEL="*feelings check channel ID goes here*"
DB_FILE_PATH="./your/db/path/here"
BUILD_DATE="build info goes here, ideally a semantic version and a date"
```

## icon source
[here](https://picrew.me/image_maker/685226)

## licensing
see `LICENSE.txt`
