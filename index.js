import './style.css';

let url = "https://us-central1-todo-list-napoleonit.cloudfunctions.net/webApi/api/v1/"
let chargeButton = document.getElementById('chargeButton');
chargeButton.innerHTML = 'Выберите опцию';
let myList = document.getElementById('myList');

let showToDos = () => {
    if (myList.style.display == 'none') {
    myList.style.display = 'block';
    fetch(url + "getToDos", {
        method: "GET"
      })
      .then(response => response.json())
      .then(responseText => {
        myList.innerHTML = ' ';
       
      

        responseText.forEach((element) => {
          let listItem = document.createElement('button');
          let itemText = element.label;
          listItem.innerText = itemText;
          myList.append(listItem);
          showCompleted(listItem, element, itemText);
        })
      });
  } else {
    myList.style.display = 'none';
  }
};

let showCompleted = (listItem, element, itemText) => {
  if (element.completed == true) {
    listItem.classList.add('completed');
    listItem.onclick = () => {
      chargeButton.innerHTML = 'Дело сделано';
      showToDos();
    };
  } else {
    listItem.classList.add('not-completed');
    listItem.onclick = () => {
      chargeButton.innerHTML = 'Не забудь ' + itemText[0].toLowerCase() + itemText.slice(1)
      showToDos();
    };

  }
};



chargeButton.addEventListener('click', showToDos,chargeButton.innerHTML = 'Выберите опцию' );

 
  

 
 



