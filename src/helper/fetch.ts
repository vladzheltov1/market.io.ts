
/* ----------- DEPRECATED ----------- */
/* USE SERVICE AND CONTROLLER INSTEAD */


// import { router } from "../helper/createRouter";
// import { Category, getName } from "../list/productCategories";
// import { fetchData } from "./fetchScript";

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();

// router.post('/fetch/data/:type/', jsonParser, (req, res) => {
//     const type = req.params.type.trim();
//     const query = req.body.query.trim();

//     fetchData(query, type, (data) => {
//         if(data.response === null){
//             return res.json({response: null, status: 404});
//         }

//         if(data.error){
//             return res.json({error: data.error, status: 400});
//         }

//         const arr = [];
//         const likely = getName(Category[data[0].product_category]);

//         for(let i = 0; i < likely.length; i++){
//             arr.push(likely[i]);
//         }

//         for(let i = 0; i < data.length; i++){
//             if(i == 5) break;

//             const title = data[i].product_title.toLowerCase();
//             const link = "/product/"+data[i].id;

//             arr.push({title, link});
//         }

//         return res.json({ response: arr, status: 200 });
//     });
// });

// module.exports = router;