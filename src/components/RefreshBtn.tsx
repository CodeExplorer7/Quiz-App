import React from "react";

export const RefreshBtn = (props: { handleRefresh: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    return (<button className="refresh-btn" onClick={props.handleRefresh}>Попробовать еще раз</button>);
};