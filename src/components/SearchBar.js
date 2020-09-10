import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    // state = {term: ''};
    const [term, setTerm] = useState('');

    const onInputChange = e => {
        setTerm(e.target.value);
    };

    const onSubmitForm = e => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="ui segment search-bar"> 
            <form className="ui form" onSubmit={onSubmitForm}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
    
}

export default SearchBar;