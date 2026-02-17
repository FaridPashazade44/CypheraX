// rateLimit.ts

// Rate limiting utilities for general and authentication endpoints

const rateLimit = (maxRequests: number, timeWindow: number) => {
    let requests: number = 0;
    let startTime: number = Date.now();

    return (req: any, res: any, next: any) => {
        const currentTime = Date.now();

        if (currentTime - startTime > timeWindow) {
            // Reset the request count and start time
            requests = 1;
            startTime = currentTime;
        } else {
            requests++;
        }

        if (requests > maxRequests) {
            res.status(429).send('Too many requests. Please try again later.');
        } else {
            next();
        }
    };
};

const authRateLimit = rateLimit(100, 60 * 1000); // 100 requests per minute
const generalRateLimit = rateLimit(1000, 60 * 1000); // 1000 requests per minute

export { authRateLimit, generalRateLimit };