import './FilterCheckbox.css'

function FilterCheckbox({onChange}) {

  
    return (
        <div className="filter-checkbox">
            <p className="filter-checkbox__caption">Короткометражки</p>
            <input className="filter-checkbox__checkbox" type="checkbox" />
        </div>
    )
}

export default FilterCheckbox
