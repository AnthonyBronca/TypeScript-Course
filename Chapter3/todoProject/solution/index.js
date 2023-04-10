window.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector('#add-button');
    var list = document.querySelector('#ordered-list');
    var inputField = document.querySelector('#input-item');
    var newText = inputField.value;
    function makeNewListItem(text) {
        var newListItem = document.createElement('li');
        newListItem.className = 'list-item';
        newListItem.innerText = text;
        var newDeleteRadio = document.createElement('button');
        newDeleteRadio.innerText = 'Delete';
        newDeleteRadio.className = 'delete-button';
        newDeleteRadio.addEventListener('click', function (e) {
            var item = newDeleteRadio.parentElement;
            list === null || list === void 0 ? void 0 : list.removeChild(item);
        });
        newListItem.appendChild(newDeleteRadio);
        return newListItem;
    }
    inputField.addEventListener('keypress', function (e) {
        newText = inputField.value;
        // console.log(newText)
        if (e.key === 'Enter') {
            if (newText === "" || newText.startsWith(' ')) {
                inputField.placeholder = 'Please Enter Text';
                inputField.setAttribute('style', 'outline-color:red; border: 2px solid red');
            }
            else {
                if (newText !== '') {
                    inputField.setAttribute('style', '');
                }
                inputField.value = '';
                var newListItem = makeNewListItem(newText);
                list === null || list === void 0 ? void 0 : list.appendChild(newListItem);
                newText = '';
            }
        }
    });
    addButton.addEventListener('click', function (e) {
        newText = inputField.value;
        if (newText === "" || newText.startsWith(' ')) {
            inputField.placeholder = 'Please Enter Text';
            inputField.setAttribute('style', 'outline-color:red; border: 2px solid red');
        }
        else {
            if (newText !== '') {
                inputField.setAttribute('style', '');
            }
            var newListItem = makeNewListItem(newText);
            list === null || list === void 0 ? void 0 : list.appendChild(newListItem);
            inputField.value = '';
            newText = '';
        }
    });
});
