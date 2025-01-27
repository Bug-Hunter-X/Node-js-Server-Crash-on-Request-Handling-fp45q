# Node.js Server Crash on Request Handling

This repository demonstrates a common error in Node.js server development where the server crashes unexpectedly due to improper request handling.  The issue arises from attempting to access the `req.url` property before fully verifying if it is available, potentially leading to a runtime error if the request is malformed or unexpected.

## Bug Description
The provided code creates a simple HTTP server.  The error occurs within the request handler.  Under certain circumstances (such as malformed requests), accessing `req.url` can cause the server to crash.

## Solution
The solution involves adding a check to ensure `req.url` exists before attempting to access its value.  This check prevents the error and gracefully handles unexpected requests, increasing the robustness of the server.

## How to reproduce the bug
1. Clone this repository.
2. Run `node bug.js`
3. Send a malformed request to the server (e.g., using tools like curl).

The server will likely crash due to an unhandled exception.