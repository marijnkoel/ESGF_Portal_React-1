import React, {Component} from "react";

export class ESGFPropertyList extends Component {


    componentWillReceiveProps({properties}) {
        this.setState({properties: properties})
    }


    render() {
        let title = this.props.title;
        let onSelect = this.props.properties.onSelect;

        let createOnSelect = function (item) {
            return function () {
                onSelect(item)
            };
        };

        let items = this.props.properties.items.map(item =>
            <li className="list-group-item"
                onClick={createOnSelect(item)}>
                {item}
            </li>
        );

        return (
            <div className="col-sm border-right border-left">
                <h3 className='text-center'>{title}</h3>

                <div className="input-group md-form form-sm form-2 pl-0 mb-4">
                    <input className="form-control my-0 py-1" style={{ fontSize: 12 }} type="text" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fas fa-search text-gray"
                            aria-hidden="true"></i></span>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    {items}
                </ul>
            </div>
        )
    }
}