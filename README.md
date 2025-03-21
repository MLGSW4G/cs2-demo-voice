# cs2-demo-voice

This webapp provides a convenient way to enable voice chat of certain players in a Counter-Strike 2 demo. It parses out the demo for players data to get their entindices and generates a console command based on selected players.

## Prerequisites

-   **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
-   **npm**: This is included with Node.js, but ensure it's updated to the latest version by running `npm install -g npm`.

## Usage

1. **Start the webapp**:

    - Run `start.bat`. This script will:
        - Check for the presence of `node_modules`. If not found, it will run `npm install` to install the required dependencies.
        - Start the Node.js server by executing `node server.js`.
        - Open your web browser to `http://localhost:3000`.

2. **Upload a demo file**:

    - Click on the "Upload a .dem file" area to select a demo file from your computer.

3. **Select players**:

    - Check the checkmarks next to the players you want to enable voice chat for.

4. **Run the command**:
    - Play the demo file in-game and run the generated command to listen to the selected players' voice chat.

## Credits

-   [u/catcatcatcatcatcatta](https://www.reddit.com/r/FACEITcom/comments/16vvidt/comment/l1agp0d/)
-   [`@laihoe/demoparser2`](https://github.com/LaihoE/demoparser)
