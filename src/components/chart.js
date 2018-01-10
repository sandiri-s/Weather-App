import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data)
{

  return _.round(_.sum(data)/ data.length);
}

export default (props) => {

return (
<div>
<Sparklines height={60} width={90} data={props.property}>
<SparklinesLine color={props.color} />
<SparklinesReferenceLine type="avg" />
</Sparklines>
<div>  {average(props.property)} {props.units}</div>
</div>

);

}
