import Dropdown from 'react-bootstrap/Dropdown';
const Hero=()=>{
    return(
        <div className="d-none d-lg-block">
        <div id="hero">
            <h2>TV Shows</h2>
            <div className="d-flex align-items-center justify-content-between">
                <Dropdown>
                    <Dropdown.Toggle id="generesDropdown">
                        <span>Generes</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-light">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Series</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Documentaries</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
                <div id="heroIcons">
                    <span><i className="bi bi-text-left"></i></span>
                    <span><i className="bi bi-arrows-fullscreen"></i></span>
                </div>
            </div>

        </div>
    </div> 
    )
}

export default Hero