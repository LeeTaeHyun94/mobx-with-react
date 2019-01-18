import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(({ marketStore }) => ({ total: marketStore.total }))
@observer
class TotalPrice extends Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <hr />
        <p>
          <b>
            Total&nbsp;:&nbsp;$&nbsp;
            {total}
          </b>
        </p>
      </div>
    );
  }
}

export default TotalPrice;
