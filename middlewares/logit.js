export default function logit(req, res, next) {
    //next --> function object 

    console.log(`URL: ${req.url}`);
    console.log(`when: ${new Date()}`);

    next(); // runs the middleware in line (if any) or the main callback function
}