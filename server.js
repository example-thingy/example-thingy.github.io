const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Strip query parameters from the requested URL
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = parsedUrl.pathname;

    // Custom route mapping
    if (pathname === "/") {
        pathname = "/example.html";
    } else if (pathname === "/startofpurgatory") {
        pathname = "/start.html";
    }

    // Safely resolve the absolute file path relative to this script
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath).toLowerCase();

    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
        ".json": "application/json",
        ".txt": "text/plain",
        ".webp": "image/webp",
        ".gif": "image/gif"
    };

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "application/octet-stream"
        });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});