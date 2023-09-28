#Shopping List Project - Used in the Objects in JavaScript Course - School Front-End Alura

This file contains code models that will be used throughout the course.

Model code for the "Purchased" li:

    <li class="item-compra is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" checked class="is-clickable" />
            <span class="itens-comprados is-size-5"></span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable delete"></i>
        </div>
    </li>

    Model code for the "Shopping list" li:

     <li class="buy-item is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value=""></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable delete"></i>
        </div>
    </li>

    Input with refactored code:
    <div>
        <input type="checkbox" checked class="is-clickable" />
        <span class="itens-comprados is-size-5">${elemento.valor}</span>
    </div>

    Edition Icons:
    
     <i class="fa-regular fa-floppy-disk is-clickable"></i><i class="fa-regular is-clickable fa-pen-to-square edit"></i>
