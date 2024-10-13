const fs = require('fs');
const { resolve } = require('path');
const supeagent = require('superagent');
const { reject } = require('superagent/lib/request-base');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject('I couldn find the file');
            resolve(data);
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('couldnt write the file!');
            resolve('successefully written the file!');            
        })
    })
}

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`breed: ${data}`);

        const resPic1 = supeagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const resPic2 = supeagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const resPic3 = supeagent.get(`https://dog.ceo/api/breed/${data}/images/random`);

        const all = await Promise.all([resPic1, resPic2, resPic3]);
        const imgs = all.map(el => el.body.message);

        await writeFilePro('dog-img.txt', imgs.join("\n"));
        console.log("random dog img written");
    } catch(err) {
        console.log(err)
        throw err;
    }
    return "3: Dog pics READY";

}

(async () => {
    try {
        console.log("1: Will get dog pics");
        const x = await getDogPic();
        console.log(x);
        console.log("2: dog pics processed");
    } catch(err) {
        console.log("ERROR!!!");
    }
}) ();

// console.log("1: Will get dog pics");
// getDogPic().then(x => {
//     console.log(x);
//     console.log("2: dog pics processed");
// }).catch(err => {
//     console.log("ERROR!!!");
// })


// readFilePro(`${__dirname}/dog.txt`).then(data => {
//     console.log(`breed: ${data}`);

//     return supeagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//     })
//     .then(res => {
//         console.log(res.body.message)
//         return writeFilePro('dog-img.txt', res.body.message)
//     })
//     .then(() => {
//         console.log("random dog img written");
//     })
//     .catch(err => {
//         console.log(err);
//     })