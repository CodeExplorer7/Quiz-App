import React from "react";

export const Refresh_btn = (props: { handleRefresh: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    return (<button className="refresh__btn" onClick={props.handleRefresh}>Попробовать еще раз</button>);
};