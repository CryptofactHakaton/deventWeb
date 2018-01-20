const DEFAULT_ADDRESS = '0.0.0.0';
const DEFAULT_PORT = 3000;
const DEFAULT_DEV_PORT = 3010;

function normalizePort(val: any) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

export default {
    port: normalizePort(process.env.PORT || DEFAULT_PORT),
    address: process.env.ADDRESS || DEFAULT_ADDRESS
};

export const additionalSettings = {
    devPort: DEFAULT_DEV_PORT
};
