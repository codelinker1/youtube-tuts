// бинарное дерево поиска
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    // создание нового элемента
    _createNode(data){
        return {
            data: data,
            left: null,
            right: null,
        };
    }
    // вставка нового элемента в дерево
    insertNewNode(data){
        let node = this._createNode(data);
        let currentNode;

        if(!this.root){
            this.root = node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if(!currentNode.left){
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (data > currentNode.data) {
                    if(!currentNode.right){
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    this.showWarning(`Телефон ${data} уже есть в базе данных!`);
                    break;
                }
            }
        }
    }
    // проходим по дереву и выводим все номера телефонов
    preorderTraversal(node){
        this._appendPhoneToList(node.data);

        if(node.left){
            // проходим по левому поддереву
            this.preorderTraversal(node.left);
        }

        if(node.right){
            // проходим по правому поддереву
            this.preorderTraversal(node.right);
        }
    }
    // добавление телефона в список
    _appendPhoneToList(value){
        let ul = document.getElementById("phone-list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        ul.appendChild(li);
    }
    // показывает предупреждение
    showWarning(text){
        document.getElementById("warning-text").innerHTML = text;
        setTimeout(() => {
            document.getElementById("warning-text").innerHTML = "";
        }, 3000);
    }
}

let BST = new BinarySearchTree();

function showAllNumbers() {
    // чистим список перед показом
    document.getElementById("phone-list").innerHTML = "";
    if(BST.root) {
        BST.preorderTraversal(BST.root);
    }
}

function saveNumber() {
    let phone = Number(document.getElementById("phone").value);
    BST.insertNewNode(phone);

    console.log(BST);
}