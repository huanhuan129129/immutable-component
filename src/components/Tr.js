import React, { PureComponent } from 'react';

export default class Tr extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(e){
        Perf.start();
        const value= e.target.value;
        this.setState({ edit: false });
        const { onChange, data: { item_id } } = this.props;
        onChange && onChange(item_id, value);
    }
 
    handleClick(){
        this.setState({ edit: true });
    }

    render() {
        const data = this.props.data;
        const { edit, value } = this.state;
        console.log('render tr')
        return (<div className="tr">
            <div className="cell">
                <div className="cell__child-container">
                    <div>{data.get('item_id')}</div>
                </div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{data.get('bro_uvpv')}</div>
            </div>
            <div className="cell cell--money cell--center">
                <div className="cell__child-container">{data.get('stock_num')}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">{edit ? <input onBlur={this.handleBlur}  defaultValue={data.get('sold_num')} /> : data.get('sold_num')}</div>
            </div>
            <div className="cell" >
                <div className="cell__child-container">
                    <span onClick={this.handleClick}>修改</span>
                </div>
            </div>
        </div>);
    }
}