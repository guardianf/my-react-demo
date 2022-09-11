import React, { Component } from 'react';
import { Input } from 'antd';
import './index.less'

/**
* @author yubin.fu
* @create_date  2022-03-16
* @class  BlockInput
**/
class BlockInput extends Component {
  state = {
    searchList: [],
    value: ''
  }

  valueChange = e => {
    const { data } = e.nativeEvent;
    const { value } = e.target;
    const { searchList } = this.state;
    let newSearchList = [];
    let newValue = '';
    switch(data) {
      case ' ':
        let blankIndex = value.indexOf(' ');
        let newCondition = value.slice(0, blankIndex);
        newSearchList = [...searchList, newCondition];
        newValue = value.slice(blankIndex + 1);
        break;
      default:
        newSearchList = searchList;
        newValue = value;
    }
    this.setState({
      searchList: newSearchList,
      value: newValue
    })
  }

  render() {
    const { searchList, value } = this.state;
    return(
      <div className='block-input'>
        {
          searchList.map((condition, index) => {
            return (
              <span key={index}>{ condition }-close</span>
            );
          })
        }
        <Input onChange={ this.valueChange } value={ value } />
      </div>
    )
  }
}

export default BlockInput;