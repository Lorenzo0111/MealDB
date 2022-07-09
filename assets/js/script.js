const image = document.getElementById("image");
const link = document.getElementById("link");
const instructions = document.getElementById("instructions");
const title = document.getElementById("title");
const cuisine = document.getElementById("cuisine");
const ingredients = document.getElementById("ingredients");


function render() {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((response) => {
        const meal = response.data.meals[0];
        
        const image = meal.strMealThumb;
        const link = meal.strSource;
        const instructions = meal.strInstructions;
        const title = meal.strMeal;
        const cuisine = meal.strArea;
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            ingredients.push(meal[`strIngredient${i}`]);
        }

        this.image.src = image;
        this.link.href = link;
        this.instructions.innerText = instructions;
        this.title.innerText = title;
        this.cuisine.innerText = cuisine;
        this.ingredients.innerText = ingredients.join(", ");
    });
}

render();

document.getElementById("render").addEventListener("click", function (e) {
    render();
});