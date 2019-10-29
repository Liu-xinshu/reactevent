import Mock from 'mockjs';




Mock.mock('/get/data', ({ body }) => {
    console.log(body)
    let { page, limit } = JSON.parse(body);
    let start = (page - 1) * limit;
    if (page > 10) return { list: [] }
    return Mock.mock({
        [`list|` + limit]: [{
            'id|+1': start,
            'title|1.5': '@ctitle',
            'count': 0,
            'price|80-200': 80,
            'img': '@image(150x150)#abc',
            'address': '@region',

        }]

    })
})


Mock.mock('/get/classify', {
    'list|5': [{
        'id|+1': 0,
        'name': '@cname',
        'child|20': [{
            'id|+1': 0,
            'title|1.5': '@ctitle',
            'count': 0,
            'price|80-200': 80,
            'img': '@image(150x150)#abc',
            'address': '@region',
            'checked': false

        }]

    }]
})