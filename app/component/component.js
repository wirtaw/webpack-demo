export default (text = 'Hello webpack2 demo', num = 5) => {
    const element = document.createElement('div');
    element.innerHTML = text+ num;
    return element;
};