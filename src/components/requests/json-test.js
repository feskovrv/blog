
const item = {label: 'React это хорошо', important: false, like:false, id: 2};

const itemJSON = JSON.stringify(item)

console.log(JSON.parse(itemJSON))