import React ,{Fragment} from 'react';

function StylingSelected(selected){
    if(selected){
        return "itemsBackground";
    }else{
        return "items";
    }
}

function SelectItems({items,Select,Deselect}) {
    return (
        <Fragment>
            <div
                className={`items ${StylingSelected(items.selected)}`}
                onClick= {()=>Select(items.id)}
                onDoubleClick={()=>Deselect(items.id)}>
                {items.title}
            </div>
        </Fragment>
    );
}

export default SelectItems;