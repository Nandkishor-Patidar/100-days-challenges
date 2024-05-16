function greet() {
    return 'Hello';
}
function name(user, fun)
{
    const message = fun();

    console.log(`${message} ${user}`);
}

name('Sonu', greet);
name('Vivek', greet);