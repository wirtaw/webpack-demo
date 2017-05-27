export default (text = 'Hello webpack2 demo', num = 9, array = ['a','b','c']) => {
    const element = document.createElement('div');
    element.innerHTML = text+ ' '+num+' '+ array.join();
    return element;
};