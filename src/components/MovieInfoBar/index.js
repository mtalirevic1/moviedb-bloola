import React from "react";
//Helper methods
import {calcTime, convertMoney} from "../../helpers";
//Styles
import {Wrapper, Content} from "./MovieInfoBar.style";

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time:{'\n'}{calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget:{'\n'}{convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue:{'\n'}{convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;
