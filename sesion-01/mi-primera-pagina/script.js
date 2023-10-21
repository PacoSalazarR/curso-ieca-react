document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    const list = document.querySelector("#list");

    button.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = input.value;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        li.append(checkbox, deleteButton);

        deleteButton.addEventListener("click", () => {
            li.remove();
        })

        list.appendChild(li);
    });
});
