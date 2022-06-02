import '../css/ListOptions.css'
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import Select from './Select';

const ListOptions = ({city, setSearchParams}) => {
    return (
        <div className="options" style={{
            justifyContent: city ? 'space-between' : 'flex-end'
        }}>
                <div className="query" style={{
                        display: !city ? 'none' : '',
                    }}>
                        <p>City: {city}</p>
                        <div className="close-icon" onClick={() => {
                            setSearchParams('')
                        }}>
                            <Icon 
                                path={mdiClose}
                                size={1}
                            />
                        </div>
                    </div>
                <div className="sort-by">
                    <Select>
                        <p>Default sorting</p>
                        <p>Price descending</p>
                        <p>Price ascending</p>
                    </Select>
                </div>
            </div>
    )
}

export default ListOptions