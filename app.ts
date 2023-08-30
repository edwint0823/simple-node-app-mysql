import mySqlClient from './utils/mySqlClient'

async function main() {
    console.time('prueba')
    try {
        const [countData, fields] = await mySqlClient.execute(`select count(id) as total from prueba where growth_map = ?`, [
            true,
        ]);

        const [paginateData] = await mySqlClient.execute(`select * from prueba where growth_map = ${true} limit ${2} offset ${(2 - 1) * 2} `);
        console.log('Rows:', countData[0]);
        console.log('Rows:', paginateData.length);
        mySqlClient.end();
        console.timeEnd('prueba')
    } catch (error) {
        console.error('Error:', error);
    }
}

main();