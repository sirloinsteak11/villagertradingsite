for (let i = 0; i < 7; i++) {
    let featItemList = document.getElementById('featured-items-list');
    let textBox = document.createElement('div');
    textBox.setAttribute('class',`featured-item-cells`);
    console.log(textBox.id);
    featItemList.appendChild(textBox);
}

