import './app-filter.css'

const AppFilter = ({onFilter}) => {
    

    return (
        <div className="btn-group">
            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={() => {
                onFilter('name')
            }}>
                Сортировать по алфавиту
            </button>

            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={() => {
                onFilter('salary')
            }}>
                Сортировать по стоимости
            </button>
        </div>
    );
}

export default AppFilter;

