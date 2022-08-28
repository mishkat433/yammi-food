const loadData = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data.meals);
            len(data.meals);
        })
}

const len = (le) => {
    document.getElementById("count").innerText = le.length;
}

document.getElementById("search").addEventListener("click", () => {
    const input = document.getElementById("input");
    document.getElementById("searchText").innerText = input.value;
    loadData(input.value);
    input.value = "";
})

const displayData = (catcheData) => {
    if (catcheData.length === undefined) {
        loadData("");
    }
    else {
        const parent = document.getElementById("card-parent");
        parent.innerHTML = ``;
        catcheData.map(data => {
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
                    <div class="card h-100 ">
                        <img src="${data.strMealThumb}" class="card-img-top" style="height: 18rem;" alt="...">
                        <div class="card-body">
                            <h2 class="card-title text-center fw-bold mb-2">${data.strMeal}</h2>
                            <hr/>
                            <div class="d-flex justify-content-between align-items-center mb-2"><h5 class="">Area : ${data.strArea} </h5><h5 class="">Category : ${data.strCategory} </h5></div>
                            <p class= " text-muted text-justify"  > ${data.strInstructions.slice(0, 200)}...</p >
                            <p class="card-text text-muted text-center"><span class="text-dark">Metarials :</span> ${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, ${data.strIngredient4}, ${data.strIngredient5}, ${data.strIngredient5},
                             ${data.strIngredient7}, ${data.strIngredient8}, ${data.strIngredient9}, ${data.strIngredient10}, ...</p >
                        </div >
                    </div >
            `
            parent.appendChild(div)
        });
    }
}
loadData("")