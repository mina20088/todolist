import React, {Fragment} from 'react';

function DeleteSelectedItems({Delete}) {
    return (
        <Fragment>
            <button className={"btn btn-primary"} onClick={Delete}>Delete</button>
        </Fragment>
    );
}

export default DeleteSelectedItems;