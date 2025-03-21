// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { parsePlayerInfo } = require("@laihoe/demoparser2");

const PORT = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const serveStaticFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (error, content) => {
        res.writeHead(error ? 500 : 200, { "Content-Type": contentType });
        res.end(error ? `Error: ${error.code}` : content, "utf-8");
    });
};

const handleUpload = (req, res) => {
    const fileBuffer = req.file.buffer;
    try {
        const players = parsePlayerInfo(fileBuffer);
        console.log("Successfully parsed player info:", players);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, players }));
    } catch (error) {
        console.error("Error processing the file:", error);
        res.writeHead(500).end("Error processing the file.");
    }
};

const server = http.createServer((req, res) => {
    const routes = {
        "/": () => serveStaticFile(res, path.join(__dirname, "public", "index.html"), "text/html"),
        "/style.css": () => serveStaticFile(res, path.join(__dirname, "public", "style.css"), "text/css"),
        "/upload": () => {
            if (req.method === "POST") {
                upload.single("demFile")(req, res, (err) => {
                    if (err) {
                        return res.writeHead(500).end("Error uploading file.");
                    }
                    handleUpload(req, res);
                });
            } else {
                res.writeHead(405).end("Method Not Allowed");
            }
        },
    };
    (routes[req.url] || (() => res.writeHead(404).end("Not Found")))();
});

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
