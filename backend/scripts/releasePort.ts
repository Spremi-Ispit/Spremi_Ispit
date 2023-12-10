// @ts-nocheck
import killPort from 'kill-port';

async function releasePort(port) {
  try {
    await killPort(port);
    console.log(`Successfully released the port ${port}.`);
  } catch (err) {
    console.error(`Error releasing the port ${port}:`, err.message);
  }
}

// Replace 5000 with the port number you want to target
const portToRelease = 5000;

releasePort(portToRelease);
