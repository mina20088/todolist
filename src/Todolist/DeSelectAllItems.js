import React, {Fragment} from 'react';


function DeSelectAllItems({items,DeselectAll}) {
    return (
        <Fragment>
            <button className={"btn btn-warning"} onClick={DeselectAll}>Remove Selection</button>
        </Fragment>
    );
}

export default DeSelectAllItems;