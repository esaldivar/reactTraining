
const fruits = {};

 fruits.apples = (req, res, next) => {
   
    try {
        res.fruit = 'apples';
        next();
    } catch (error) {
        
        next();
    }
}

fruits.oranges = (req, res, next) => {
   
    try {
        res.fruit = res.fruit + " are the best fruit";
        next();
    } catch (error) {
        
        next();
    }
}

module.exports = fruits;

