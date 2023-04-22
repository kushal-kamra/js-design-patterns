// Decorator eg. 1
// Advantages - D.R.Y - Don't repeat yourself

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

console.log('sum : ', sum);
console.log('sum(1, 2) : ', sum(1, 2));

const call_count = (fn) => {
    let count = 0;

    return (...args) => {
        count += 1;
        console.log(`sum has been called ${count} times`);
        return fn(...args);
    }
}

console.log('call_count : ', call_count);
console.log('call_count() : ', call_count());
console.log('call_count(sum) : ', call_count(sum));
console.log(call_count(sum)(1, 2));
console.log(call_count(sum)(3, 4, 5, 6));

sum = call_count(sum);

console.log(sum(1, 2, 3));
console.log(sum(4, 5));
console.log(sum(6, 7, 8, 9));

// Decorator eg. 2

let rectangle_area = (len, wid) => {
    return len * wid;
}

console.log('rectangle_area.length : ', rectangle_area.length);

let circle_area = (r) => {
    return 3.14 * r * r;
}

console.log('circle_area.length : ', circle_area.length);

const check_params_count = (fn) => {
    return (...params) => {
        if (fn.length != params.length) {
            throw new Error(`Incorrect no of params for ${fn.name}`);
        }
        return fn(...params);
    }
}

console.log('check_params_count : ', check_params_count);
console.log('check_params_count() : ', check_params_count());
console.log('check_params_count(rectangle_area) : ', check_params_count(rectangle_area));
// console.log('check_params_count(rectangle_area)() : ', check_params_count(rectangle_area)()); //Throws error
console.log('check_params_count(rectangle_area)(2, 3) : ', check_params_count(rectangle_area)(2, 3));
console.log('check_params_count(circle_area)(2) : ', check_params_count(circle_area)(2));

const check_param_integer = (fn) => {
    return (...params) => {
        params.forEach((param) => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params for ${fn.name} must be integers`);
            }
        })

        return fn(...params);
    }
}

// console.log('check_param_integer(circle_area)(\'a\') : ', check_param_integer(circle_area)('a')); //Throws error
console.log('check_param_integer(circle_area)(5) : ', check_param_integer(circle_area)(5));

rectangle_area = check_params_count(rectangle_area);
rectangle_area = check_param_integer(rectangle_area);

console.log('rectangle_area(2, 3) : ', rectangle_area(2, 3));

circle_area = check_params_count(circle_area);
circle_area = check_param_integer(circle_area);

console.log('circle_area(5) : ', circle_area(5));

// Decorator eg. 3

let request_data = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

let data_response_time = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

let test_request_data = async () => {
    request_data = data_response_time(request_data);
    const data = await request_data('https://jsonplaceholder.typicode.com/posts');
    // console.log(data);
}

test_request_data();