let arr = [{name: 'test', variables:['1', '2', '3']}, {name: 'test2', variables:['12', '22', '32']}, {name: 'test3', variables:['13', '22', '32']}]
let counter = 1;

function createSelect(name, secondName){

    let selectList = document.createElement("select");
    selectList.id = name === 'first' ? name : name + counter;
    selectList.name = name;
    if(name === 'first'){
        selectList.onchange = function (){
            let options = document.getElementsByClassName('main');
            for(let i = 0; i < 3; i++){
                if(options[i].selected === true){
                    if(document.getElementById('second')) document.getElementById('second').remove();
                    createSelect('second', options[i].label);
                }
            }
        }
    } else {
        counter++;
    }

    document.body.appendChild(selectList);

    let option;

    for (let i = 0; i < arr.length; i++) {
        if(name === 'first'){
            option = document.createElement("option");
            option.className = 'main';
            option.label = arr[i]['name'];
            selectList.appendChild(option);
        } else if(name !== 'first' && arr[i]['name'] === secondName) {
            for(let a = 0; a < arr[i]['variables'].length; a++){
                option = document.createElement("option");
                option.label = arr[i]['variables'][a];
                selectList.appendChild(option);
            }
            let deleteButton = document.createElement('button');
            deleteButton.value = name + (counter-1);
            deleteButton.innerHTML = 'Delete';
            deleteButton.onclick = function (){
                console.log(this.value);
                document.getElementById(this.value).remove();
                this.remove();
            }
            document.body.appendChild(deleteButton);
        }

    }
}
