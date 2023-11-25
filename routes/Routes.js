
const router = require("express").Router();

router.post("/calculate", (req, res) => {
    const num1 = +req.body.num1;
    const num2 = +req.body.num2;
    const sum = num1 + num2;
    if (req.body.operation == "+") {
        res.render("template.ejs", {
            title: `${num1} + ${num2}`,
            content: `The sum of ${num1} and ${num2} is ${num1 + num2}`
        });
    } else if (req.body.operation == "-") {
        res.render("template.ejs", {
            title: `${num1} - ${num2}`,
            content: `The subtraction of ${num2} from ${num1} is ${num1 - num2}`
        });
    } else if (req.body.operation == "*") {
        res.render("template.ejs", {
            title: `${num1} * ${num2}`,
            content: `The multiplication of ${num1} and ${num2} is ${num1 * num2}`
        });
    } else {
        res.render("template.ejs", {
            title: `${num1} / ${num2}`,
            content: `The division of ${num1} by ${num2} is ${num1 / num2}`
        });
    }

});

module.exports = router;
