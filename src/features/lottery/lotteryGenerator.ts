
function createPool(range: number) {
    const pool = [];

    for (let i = 1; i < range + 1; i++) {
        pool.push(i);
    }

    return pool;
}

function pick(pool: number[], times: number) {
    const result = [];

    for (let i = times - 1; i >= 0; i--) {
        const position = Math.floor(Math.random() * pool.length);
        // console.log(position);

        const num = pool.splice(position, 1);
        // console.log(num);

        result.push(...num);
    }

    return result;
}

export default function generate() {
    const poolRed = createPool(35);
    const poolBlue = createPool(12);

    const front = pick(poolRed, 5);
    const back = pick(poolBlue, 2);

    front.sort((a, b) => a - b);
    back.sort();
    // console.log(front);
    // console.log(back);

    return [...front, ...back];
}

