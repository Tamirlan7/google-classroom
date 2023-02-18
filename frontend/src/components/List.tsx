import React from 'react';


interface ListProps<T> extends React.PropsWithChildren {
    items: T[]
    render: (item: T, index?: number) => React.ReactNode
    className?: string
}

function List<T> ({ items, render, className }: ListProps<T>) {
    
    return (
        <div className={className}>
            {items.map(render)}
        </div>
    )
}

export default List;
