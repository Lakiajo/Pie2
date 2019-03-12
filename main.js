// console.log('Lakia Jones');

const pies = [
    {
        name: 'Dutch Apple Pie',
        ingredients: 'apples, sugar, butter, nutmeg, dutchPeople',
        bakeTemp: 5000,
        drinkPairing: 'wine',
        image: 'https://assets.kraftfoods.com/recipe_images/opendeploy/125555-371505b764d77c2e01277c88792fbf5d18c58059_642x428.jpg',
        instructor: 'Zoe',
        iceCream: 'Vanilla',
    },
    {
        name: 'Cherry Pie',
        ingredients: 'apples, sugar, butter, nutmeg, dutchPeople',
        bakeTemp: 350,
        drinkPairing: '',
        image: 'https://assets.kraftfoods.com/recipe_images/opendeploy/125555-371505b764d77c2e01277c88792fbf5d18c58059_642x428.jpg',
        instructor: 'Zoe',
        iceCream: 'Caramel'
    },
    {
        name: 'Regular Apple',
        ingredients: 'apples, sugar, butter, nutmeg, dutchPeople',
        bakeTemp: 350,
        drinkPairing: '',
        image: 'https://assets.kraftfoods.com/recipe_images/opendeploy/125555-371505b764d77c2e01277c88792fbf5d18c58059_642x428.jpg',
        instructor: 'Zoe',
        iceCream: 'Caramel'
    },
    {
        name: 'Chocolate Pie',
        ingredients: 'apples, sugar, butter, nutmeg, dutchPeople',
        bakeTemp: 350,
        drinkPairing: '',
        image: 'https://assets.kraftfoods.com/recipe_images/opendeploy/125555-371505b764d77c2e01277c88792fbf5d18c58059_642x428.jpg',
        instructor: 'Zoe',
        iceCream: 'Caramel'
    },
    {
        name: 'Cheesecake',
      
    },
];



const printToDom = (divId, textToPrint) => {
    console.log(textToPrint)
    const selectedDiv = document.getElementById(divId);
    console.log(selectedDiv);
    selectedDiv.innerHTML += textToPrint;
};

const pieType = () => {
    let domString = '';
    for (let l = 0; l < pies.length; l++){
        domString += `<h2>${pies[l].name}</h2>`;
    };
    printToDom('pieForDinner', domString);
};


const init = () => {
    pieType();
};
init ();