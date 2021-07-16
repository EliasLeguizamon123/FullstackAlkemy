const app = require('./app');
const PORT = process.env.PORT || 3000;

async function main() {
    await app.listen(PORT, () =>{
        console.log('====================================');
        console.log(`App Running on http://localhost:${PORT}`);
        console.log('====================================');
    })
}

main()