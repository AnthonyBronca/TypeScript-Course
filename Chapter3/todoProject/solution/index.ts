window.addEventListener("DOMContentLoaded", ()=> {


    const addButton = document.querySelector<HTMLButtonElement>('#add-button')!;
    const list = document.querySelector<HTMLOListElement>('#ordered-list');
    const inputField = document.querySelector<HTMLInputElement>('#input-item')!;

    let newText = inputField.value


    function makeNewListItem(text: string):HTMLLIElement{

        const newListItem = document.createElement('li');
        newListItem.className = 'list-item';
        newListItem.innerText = text;
        const newDeleteRadio = document.createElement('button');
        newDeleteRadio.innerText = 'Delete'
        newDeleteRadio.className = 'delete-button'
        newDeleteRadio.addEventListener('click', (e)=> {
            let item = newDeleteRadio.parentElement!;
            list?.removeChild(item)
        })
        newListItem.appendChild(newDeleteRadio)
        return newListItem;
    }


    inputField.addEventListener('keypress', (e)=> {
        newText = inputField.value
        // console.log(newText)
        if(e.key === 'Enter'){
            if(newText === "" || newText.startsWith(' ')){
                inputField.placeholder = 'Please Enter Text'
                inputField.setAttribute('style', 'outline-color:red; border: 2px solid red')
            } else{
                if(newText !== ''){
                    inputField.setAttribute('style', '')
                }
                inputField.value = ''
                const newListItem = makeNewListItem(newText);
                list?.appendChild(newListItem);
                newText = ''
            }
        }
    })

    addButton.addEventListener('click', (e):void=> {
        newText = inputField.value
        if(newText === "" || newText.startsWith(' ')){
                inputField.placeholder = 'Please Enter Text'
                inputField.setAttribute('style', 'outline-color:red; border: 2px solid red')
            } else{
                if(newText !== ''){
                    inputField.setAttribute('style', '')
                }
                const newListItem = makeNewListItem(newText);
                list?.appendChild(newListItem);
                inputField.value = ''
                newText = ''

            }
    })


})
