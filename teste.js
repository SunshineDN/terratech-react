const item = {
    0: 'Container',
    1: 'NavBar',
    2: 'NavItem',
    3: 'SearchBar',
    4: 'InputBox',
    5: 'Filter',
}

console.log(Object.keys(item).map((key) => item[key]));